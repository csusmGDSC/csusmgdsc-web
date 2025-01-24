import { PageContent } from "@/features/base";
import { OnboardingForm } from "@/features/onboarding/components/onboarding-form";

export default function OnboardingPage() {
  // todo, redirect user if onboarding complete
  return (
    <main>
      <PageContent>
        <div className="mt-10 border-l-[6px] border-blue pl-4">
          <h1 className="text-3xl font-bold text-primary">
            Let's set up your account
          </h1>
          <p className="text-muted-foreground md:w-1/2">
            Tell us more about yourself so we can provide you a personalized
            experience tailored to your needs and preferences.
          </p>
        </div>

        <OnboardingForm />
      </PageContent>
    </main>
  );
}
