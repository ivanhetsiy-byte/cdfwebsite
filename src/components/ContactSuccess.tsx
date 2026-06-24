import TransitionLink from "@/components/TransitionLink";

export default function ContactSuccess() {
  return (
    <div
      className="contact-card fade-in relative flex w-full max-w-[540px] flex-col justify-center gap-5 rounded-[23px] bg-surface-light px-8 py-8 sm:px-12"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-[family-name:var(--font-family-source-serif)] text-[32px] font-semibold leading-[1.2] text-[#171717]">
          Thank You For Submitting The Form
        </h2>
        <p className="font-[family-name:var(--font-family-source-serif)] text-[16px] font-light leading-[1.5] text-[#6b7280]">
          We&apos;ll Reach Out As Soon As Possible
        </p>
      </div>

      <TransitionLink
        href="/"
        className="interactive-button interactive-button--dark neumorphic-button relative flex h-[60px] w-full items-center justify-center rounded-[9px] bg-[#171717] font-[family-name:var(--font-family-source-serif)] text-[28px] font-light text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span
          aria-hidden
          className="neumorphic-inset pointer-events-none absolute inset-0 rounded-[9px]"
        />
        <span className="relative">Back To Home</span>
      </TransitionLink>
    </div>
  );
}
