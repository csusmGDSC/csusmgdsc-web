import { Separator } from "@/components/ui/separator";
import { PageContent } from "@/features/base";
import { SectionTitle } from "@/features/home/components/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Appearence, ProfileForm } from "@/features/settings";

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
          className="flex w-full gap-2"
        >
          <TabsList className="h-fit flex-col rounded-none border-l border-border bg-transparent p-0">
            <TabsTrigger
              value="tab-1"
              className="text-lg relative w-full font-normal justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-[3px] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="text-lg relative w-full font-normal justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-[3px] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue"
            >
              Appearence
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="text-lg relative w-full font-normal justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-[3px] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-blue"
            >
              Notifications
            </TabsTrigger>
          </TabsList>
          <div className="grow rounded-sm">
            <TabsContent value="tab-1" className="space-y-4">
              <SectionTitle
                title="Profile"
                subtitle="Change your profile details"
              />
              <ProfileForm />
            </TabsContent>
            <TabsContent value="tab-2" className="space-y-4">
              <SectionTitle
                title="Appearence"
                subtitle="Customize the appearance of the app. Automatically switch between day and night themes."
              />
              <Appearence />
            </TabsContent>
            <TabsContent value="tab-3" className="space-y-4">
              <SectionTitle
                title="Notifications"
                subtitle="Configure how you receive notifications."
              />
            </TabsContent>
          </div>
        </Tabs>
      </PageContent>
    </main>
  );
}
