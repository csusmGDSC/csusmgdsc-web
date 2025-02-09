import { FormCard, TwoFactorAuthForm } from "@/features/auth";

export default function TwoFactorAuthPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FormCard label="Two-factor authentication">
        <TwoFactorAuthForm />
      </FormCard>
    </div>
  );
}
