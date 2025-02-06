import { FormCard, ResetPasswordForm } from "@/features/auth";

export default function ResetPasswordPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FormCard label="Create new password">
        <ResetPasswordForm />
      </FormCard>
    </div>
  );
}
