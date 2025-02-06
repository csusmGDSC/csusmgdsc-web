"use client";

import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

import {
  TableActionButton,
  TableActionButtonProps,
} from "./table-action-button";
import { DataTable } from "./data-table";
import { User } from "@/types/gdsc-user";
import { UserTableColumns } from "./users-column-def";

const UsersTable = () => {
  const team: User[] = [
    {
      id: "user-001",
      full_name: "Alice Johnson",
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice@example.com",
      image: "https://gdsc-users.com/images/alice.png",
      role: "ADMIN",
      position: "leader",
      branch: "project",
      github: "https://github.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      bio: "Passionate software developer and GDSC leader.",
      tags: ["typescript", "react", "nextjs"],
      website: "https://alice.dev",
      graduation_date: new Date("2025-06-01"),
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "google",
      authId: "google-001",
      is_onboarded: true,
    },
    {
      id: "user-002",
      full_name: "Bob Smith",
      first_name: "Bob",
      last_name: "Smith",
      email: "bob@example.com",
      image: "https://gdsc-users.com/images/bob.png",
      role: "USER",
      position: "student",
      branch: "interview",
      github: "https://github.com/bsmith",
      linkedin: "https://linkedin.com/in/bsmith",
      instagram: "https://instagram.com/bsmith",
      tags: ["python", "machine learning", "data science"],
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "github",
      authId: "github-002",
      is_onboarded: false,
    },
    {
      id: "user-003",
      full_name: "Charlie Davis",
      first_name: "Charlie",
      last_name: "Davis",
      email: "charlie@example.com",
      role: "USER",
      position: "mentor",
      branch: "marketing",
      github: "https://github.com/charliedavis",
      twitter: "https://twitter.com/charliedavis",
      discord: "charliedavis#1234",
      bio: "Marketing enthusiast and tech mentor.",
      tags: ["seo", "content marketing", "branding"],
      website: "https://charliedavis.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      provider: "linkedin",
      authId: "linkedin-003",
      is_onboarded: true,
    },
  ];

  return (
    <div>
      <UsersTableActions refresh={() => {}} />
      <DataTable columns={UserTableColumns} data={team} loading={false} />
    </div>
  );
};

export default UsersTable;

/**
 * A component that renders the actions for the events table, including a list of buttons and a filter input.
 *
 * @return {JSX.Element} The JSX element representing the events table actions.
 */
const UsersTableActions = ({ refresh }: { refresh: () => void }) => {
  const ButtonActions: TableActionButtonProps[] = [
    {
      action: "Refresh",
      icon: LuRefreshCw,
      className: "hover:text-blue/80",
      id: "refresh",
      onClick: () => {
        refresh();
      },
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center pb-4 justify-between">
      <span className="flex items-center gap-4 text-blue">
        {ButtonActions.map((action) => (
          <TableActionButton key={action.action} {...action} />
        ))}
      </span>
      <span className="relative w-[20rem]">
        <Input placeholder="Filter name..." className="max-w-xs" />
        <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
      </span>
    </div>
  );
};
