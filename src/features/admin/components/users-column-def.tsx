"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import DataTableColumnHeader from "./table-sorting-button";
import { User as GDSCUser } from "@/types/gdsc-user";

export const UserTableColumns: ColumnDef<GDSCUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: false,
    cell: ({ row }) => <p className="text-xs">{row.getValue("id")}</p>,
  },
  {
    accessorKey: "fullName",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("fullName")}</p>
    ),
  },
  {
    accessorKey: "email",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <p className="text-xs">{row.getValue("email")}</p>,
  },
  {
    accessorKey: "role",
    enableHiding: false,
    header: "Role",
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("role")}</p>
    ),
  },
  {
    accessorKey: "position",
    enableHiding: false,
    header: "Position",
    cell: ({ row }) => <p className="text-xs">{row.getValue("position")}</p>,
  },
  {
    accessorKey: "branch",
    enableHiding: false,
    header: "Branch",
    cell: ({ row }) => {
      const branch = row.getValue("branch") as GDSCUser["branch"];

      const branchColors: Record<
        "project" | "interview" | "marketing",
        string
      > = {
        project: "bg-red/20",
        interview: "bg-yellow/20",
        marketing: "bg-blue/20",
      };

      return (
        <div
          className={cn(
            "p-1 border border-border rounded-sm text-center",
            branchColors[branch as "project" | "interview" | "marketing"]
          )}
        >
          <p className="font-semibold text-xs">{branch}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="hover:cursor-pointer">
              Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
