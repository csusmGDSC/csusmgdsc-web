import { Separator } from "@/components/ui/separator";
import { PageContent } from "@/features/base";
import { SectionTitle } from "@/features/home/components/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Appearence, ProfileForm } from "@/features/settings";

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
          orientation="vertical"
          className="flex w-full gap-10"
        >
          <TabsList className="h-fit flex-col rounded-none border-l border-border bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative w-full font-normal justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-[3px] data-[state=active]:shadow-none data-[state=active]:after:bg-blue data-[state=active]:bg-blue/20"
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
