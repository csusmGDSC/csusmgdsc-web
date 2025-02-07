import { EventsTable } from "@/features/admin";
import { AdminPageTitle } from "@/features/admin/components/admin-page-title";

export default function AdminEventsPage() {
  return (
    <main className="mt-4">
      <AdminPageTitle>Events</AdminPageTitle>
      <div className="m-4">
        <EventsTable />
      </div>
    </main>
  );
}
