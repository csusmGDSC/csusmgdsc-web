import { Separator } from "@/components/ui/separator";
import { PageContent } from "@/features/base";
import { SectionTitle } from "@/features/base";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Appearence, ProfileForm } from "@/features/settings";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const tabs = [
  {
    value: "tab-1",
    title: "Profile",
    subtitle: "Change your profile details",
    content: <ProfileForm />,
  },
  {
    value: "tab-2",
    title: "Appearance",
    subtitle: "Customize your experience",
    content: <Appearence />,
  },
];

export default function SettingsPage() {
  const isMobile = useIsMobile();

  return (
    <main>
      <PageContent className="mt-10 gap-6">
        <SectionTitle
          title="Settings"
          subtitle="Manage your account settings and set email preferences"
        />
        <Separator />

        <Tabs
          defaultValue="tab-1"
          orientation={isMobile ? "horizontal" : "vertical"}
          className={cn(
            "flex w-full gap-10",
            isMobile ? "flex-col" : "flex-row"
          )}
        >
          <TabsList
            className={cn(
              "gap-1 bg-transparent py-0 ",
              isMobile ? "flex-row" : "flex-col mt-8"
            )}
          >
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full py-2 justify-start data-[state=active]:bg-blue/10 data-[state=active]:shadow-none"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="grow rounded-sm">
            {tabs.map((tab) => (
              <TabsContent
                value={tab.value}
                className="space-y-4"
                key={tab.value}
              >
                <SectionTitle title={tab.title} subtitle={tab.subtitle} />
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </PageContent>
    </main>
  );
}
