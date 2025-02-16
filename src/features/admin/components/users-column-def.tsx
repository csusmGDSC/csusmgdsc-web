"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IdCard, MoreHorizontal, Pen, Trash, User } from "lucide-react";
import { cn } from "@/lib/utils";
import DataTableColumnHeader from "./table-sorting-button";
import {
  User as GDSCUser,
  IOTA_TO_GDSC_BRANCH,
  IOTA_TO_GDSC_POSITION,
} from "@/types/user";
import { Link } from "react-router-dom";

export const UserTableColumns: ColumnDef<GDSCUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: false,
    cell: ({ row }) => <p className="text-xs">{row.getValue("id")}</p>,
  },
  {
    accessorKey: "full_name",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("full_name")}</p>
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
    cell: ({ row }) => (
      <p className="text-xs">
        {IOTA_TO_GDSC_POSITION[row.getValue("position") as number]}
      </p>
    ),
  },
  {
    accessorKey: "branch",
    enableHiding: false,
    header: "Branch",
    cell: ({ row }) => {
      const branch = IOTA_TO_GDSC_BRANCH[row.getValue("branch") as number];

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
    cell: ({ row }) => {
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
              <Pen className="h-4 w-4" /> Edit
            </DropdownMenuItem>
            <Link to={`/profile/${row.getValue("id")}`} target="_blank">
              <DropdownMenuItem className="hover:cursor-pointer">
                <User className="h-4 w-4" /> Profile
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
            >
              <IdCard className="h-4 w-4" /> Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer text-destructive focus:text-destructive">
              <Trash className="h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
