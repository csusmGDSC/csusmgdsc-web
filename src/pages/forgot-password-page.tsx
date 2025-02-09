import { FormCard, ResetForm } from "@/features/auth";

export default function ResetPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <FormCard label="Reset Password">
        <ResetForm />
      </FormCard>
    </div>
  );
}
