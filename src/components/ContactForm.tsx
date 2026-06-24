"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  formatPhoneInput,
  validateContactForm,
  hasFieldErrors,
  type ContactFormFieldErrors,
  PHONE_FORMAT_HINT,
  EMAIL_FORMAT_HINT,
} from "@/lib/contact-validation";

type Gender = "male" | "female";

type FormState = {
  parentFirstName: string;
  parentLastName: string;
  contactNumber: string;
  email: string;
  childFirstName: string;
  childLastName: string;
  age: string;
  gender: Gender;
  previousExperience: string;
  medicalConditions: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  parentFirstName: "",
  parentLastName: "",
  contactNumber: "",
  email: "",
  childFirstName: "",
  childLastName: "",
  age: "",
  gender: "male",
  previousExperience: "",
  medicalConditions: "",
  message: "",
};

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="font-inter text-xs text-red-600" role="alert">
      {message}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-[family-name:var(--font-family-source-serif)] text-[22px] font-light leading-normal text-[#171717]"
    >
      {children}
    </label>
  );
}

function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-0.5">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`contact-field-input ${error ? "border-b-red-600" : ""}`}
      />
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-0.5">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`contact-field-textarea ${error ? "border-b-red-600" : ""}`}
      />
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-family-source-serif)] text-[35px] font-normal leading-normal text-[#171717]">
      {children}
    </h2>
  );
}

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateContactForm(form);
    setFieldErrors(errors);

    if (hasFieldErrors(errors)) {
      setStatus("idle");
      setErrorMessage("");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("idle");
      setFieldErrors({});
      onSuccess?.();
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send your message. Please try again later.");
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="contact-card relative flex w-full max-w-[540px] flex-col gap-10 rounded-[23px] bg-surface-light p-8 sm:p-12"
    >
      <div className="flex flex-col gap-6">
        <SectionHeading>Parent</SectionHeading>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <TextField
            id="parentFirstName"
            label="First Name"
            value={form.parentFirstName}
            onChange={(v) => update("parentFirstName", v)}
            error={fieldErrors.parentFirstName}
          />
          <TextField
            id="parentLastName"
            label="Last Name"
            value={form.parentLastName}
            onChange={(v) => update("parentLastName", v)}
            error={fieldErrors.parentLastName}
          />
        </div>

        <TextField
          id="contactNumber"
          label="Contact Number"
          type="tel"
          value={form.contactNumber}
          onChange={(v) => update("contactNumber", formatPhoneInput(v))}
          placeholder={PHONE_FORMAT_HINT}
          error={fieldErrors.contactNumber}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder={EMAIL_FORMAT_HINT}
          error={fieldErrors.email}
        />
      </div>

      <div className="flex flex-col gap-6">
        <SectionHeading>Child</SectionHeading>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <TextField
            id="childFirstName"
            label="First Name"
            value={form.childFirstName}
            onChange={(v) => update("childFirstName", v)}
            error={fieldErrors.childFirstName}
          />
          <TextField
            id="childLastName"
            label="Last Name"
            value={form.childLastName}
            onChange={(v) => update("childLastName", v)}
            error={fieldErrors.childLastName}
          />
        </div>

        <TextField
          id="age"
          label="Age"
          value={form.age}
          onChange={(v) => update("age", v)}
          error={fieldErrors.age}
        />

        <div className="flex flex-col gap-2">
          <span className="font-[family-name:var(--font-family-source-serif)] text-[22px] font-light leading-normal text-[#171717]">
            Gender
          </span>
          <div
            className={`gender-toggle flex h-12 w-full items-center gap-1 rounded-[9px] border p-1 ${
              fieldErrors.gender ? "border-red-600" : "border-black"
            }`}
            role="radiogroup"
            aria-label="Gender"
            aria-invalid={fieldErrors.gender ? true : undefined}
            aria-describedby={fieldErrors.gender ? "gender-error" : undefined}
          >
            {(["male", "female"] as const).map((option) => {
              const selected = form.gender === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => update("gender", option)}
                  className={`gender-toggle-option relative flex h-full flex-1 items-center justify-center rounded-[7px] font-[family-name:var(--font-family-source-serif)] text-[18px] font-light ${
                    selected ? "gender-toggle-option--selected" : ""
                  }`}
                >
                  {option === "male" ? "Male" : "Female"}
                </button>
              );
            })}
          </div>
          {fieldErrors.gender && (
            <FieldError id="gender-error" message={fieldErrors.gender} />
          )}
        </div>

        <TextAreaField
          id="previousExperience"
          label="Previous Experience"
          value={form.previousExperience}
          onChange={(v) => update("previousExperience", v)}
          error={fieldErrors.previousExperience}
        />

        <TextAreaField
          id="medicalConditions"
          label="Pre-existing Medical/Physical Conditions"
          value={form.medicalConditions}
          onChange={(v) => update("medicalConditions", v)}
          error={fieldErrors.medicalConditions}
        />

        <TextAreaField
          id="message"
          label="Message"
          value={form.message}
          onChange={(v) => update("message", v)}
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="font-inter text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="interactive-button interactive-button--light neumorphic-button relative flex h-[60px] w-full items-center justify-center rounded-[9px] bg-surface-light font-[family-name:var(--font-family-source-serif)] text-[28px] font-light text-[#171717] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          aria-hidden
          className="neumorphic-inset pointer-events-none absolute inset-0 rounded-[9px]"
        />
        <span className="relative">
          {status === "submitting" ? "Sending…" : "Submit"}
        </span>
      </button>
    </form>
  );
}
