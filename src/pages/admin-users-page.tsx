import { UsersTable } from "@/features/admin";
import { AdminPageTitle } from "@/features/admin/components/admin-page-title";

export default function AdminUsersPage() {
  return (
    <main className="mt-4">
      <AdminPageTitle>Users</AdminPageTitle>
      <UsersTable />
    </main>
  );
}
