"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ContactSuccess from "@/components/ContactSuccess";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {submitted ? (
        <ContactSuccess />
      ) : (
        <ContactForm onSuccess={() => setSubmitted(true)} />
      )}

      {!submitted && (
        <p className="mt-8 text-center font-[family-name:var(--font-family-source-serif)] text-[24px] font-light leading-normal text-black sm:text-[29px]">
          Call Us At{" "}
          <a
            href="tel:9292488120"
            className="text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            929-248-8120
          </a>
        </p>
      )}
    </>
  );
}
