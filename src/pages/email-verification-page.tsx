import { EmailVerification, FormCard } from "@/features/auth";

export default function EmailVerificationPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FormCard label="Verifying email">
        <EmailVerification />
      </FormCard>
    </div>
  );
}
