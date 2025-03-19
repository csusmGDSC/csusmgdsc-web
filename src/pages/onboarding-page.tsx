import { useSignOut, useUser } from "@/api/auth-api";
import { Button } from "@/components/ui/button";
import { PageContent } from "@/features/base";
import { OnboardingForm } from "@/features/onboarding/components/onboarding-form";
import { LogOut } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function OnboardingPage() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const user = useUser();

  if (!user || user?.is_onboarded) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <PageContent className="my-20">
        <div className="flex justify-between gap-2">
          <div className="border-l-[6px] border-blue pl-4">
            <h1 className="text-3xl font-bold text-primary">
              Let's set up your account
            </h1>
            <p className="text-muted-foreground md:w-1/2">
              Tell us more about yourself so we can provide you a personalized
              experience tailored to your needs and preferences.
              <br />
              <br />* You can change these details later
            </p>
          </div>

          <Button
            className="px-10"
            variant="outline"
            onClick={() => {
              signOut();
              navigate("/");
            }}
          >
            Sign Out
            <LogOut />
          </Button>
        </div>

        <OnboardingForm />
      </PageContent>
    </main>
  );
}
