export const PHONE_PATTERN = /^\d{3}-\d{3}-\d{4}$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.com$/i;

export const PHONE_FORMAT_HINT = "123-123-1234";
export const EMAIL_FORMAT_HINT = "name@example.com";

export type ContactFormValues = {
  parentFirstName: string;
  parentLastName: string;
  contactNumber: string;
  email: string;
  childFirstName: string;
  childLastName: string;
  age: string;
  gender: string;
  previousExperience: string;
  medicalConditions: string;
  message: string;
};

export type ContactFormFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function requireText(value: string, message: string) {
  return value.trim() ? null : message;
}

export function validatePhone(phone: string) {
  if (!phone.trim()) {
    return "Please enter a contact number.";
  }

  if (!PHONE_PATTERN.test(phone)) {
    return `Contact number must be in the format ${PHONE_FORMAT_HINT}.`;
  }

  return null;
}

export function validateEmail(email: string) {
  if (!email.trim()) {
    return "Please enter an email address.";
  }

  if (!email.includes("@")) {
    return "Email must include an @ symbol (e.g. name@example.com).";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address ending in .com (e.g. name@example.com).";
  }

  return null;
}

export function validateContactForm(
  form: ContactFormValues,
): ContactFormFieldErrors {
  const errors: ContactFormFieldErrors = {};

  const parentFirstNameError = requireText(
    form.parentFirstName,
    "Please enter the parent's first name.",
  );
  if (parentFirstNameError) {
    errors.parentFirstName = parentFirstNameError;
  }

  const parentLastNameError = requireText(
    form.parentLastName,
    "Please enter the parent's last name.",
  );
  if (parentLastNameError) {
    errors.parentLastName = parentLastNameError;
  }

  const phoneError = validatePhone(form.contactNumber);
  if (phoneError) {
    errors.contactNumber = phoneError;
  }

  const emailError = validateEmail(form.email);
  if (emailError) {
    errors.email = emailError;
  }

  const childFirstNameError = requireText(
    form.childFirstName,
    "Please enter the child's first name.",
  );
  if (childFirstNameError) {
    errors.childFirstName = childFirstNameError;
  }

  const childLastNameError = requireText(
    form.childLastName,
    "Please enter the child's last name.",
  );
  if (childLastNameError) {
    errors.childLastName = childLastNameError;
  }

  const ageError = requireText(form.age, "Please enter the child's age.");
  if (ageError) {
    errors.age = ageError;
  }

  if (form.gender !== "male" && form.gender !== "female") {
    errors.gender = "Please select a gender.";
  }

  const previousExperienceError = requireText(
    form.previousExperience,
    "Please describe any previous dance experience, or enter \"None\" if not applicable.",
  );
  if (previousExperienceError) {
    errors.previousExperience = previousExperienceError;
  }

  const medicalConditionsError = requireText(
    form.medicalConditions,
    "Please list any pre-existing medical or physical conditions, or enter \"None\" if not applicable.",
  );
  if (medicalConditionsError) {
    errors.medicalConditions = medicalConditionsError;
  }

  return errors;
}

export function hasFieldErrors(errors: ContactFormFieldErrors) {
  return Object.keys(errors).length > 0;
}
