"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DataTableColumnHeader from "./table-sorting-button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Event, IOTA_TO_EVENT_TYPE } from "@/types/event";
import { Link } from "react-router-dom";
import { EventTypeBadge } from "@/components/ui/event-type-badge";
import { RoomCard } from "@/components/ui/room-card";
import { IOTA_TO_ROOM_TYPE } from "@/types/room";
import { useDeleteEventById } from "@/api/event-api";

export const EventTableColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "id",
    enableHiding: false,
    header: "ID",
    cell: ({ row }) => <p className="text-xs">{row.getValue("id")}</p>,
  },
  {
    accessorKey: "title",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("title")}</p>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    enableHiding: false,
    cell: ({ row }) => {
      if (!row.getValue("date")) return null;
      const date = new Date(row.getValue("date"));
      return <p className="text-xs">{date.toDateString()}</p>;
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    enableHiding: false,
    cell: ({ row }) => {
      const startTime = row.original.start_time;
      const endTime = row.original.end_time;

      return (
        <p className="text-xs">
          {new Date(startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {new Date(endTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "room",
    header: "Room",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <RoomCard
          building={row.original.room?.building || ""}
          room={row.original.room?.room || 0}
          type={row.original.room?.type as keyof typeof IOTA_TO_ROOM_TYPE}
          capacity={row.original.room?.capacity || 0}
        />
      );
    },
  },
  {
    accessorKey: "type",
    enableHiding: false,
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as Event["type"];
      return (
        <EventTypeBadge type={IOTA_TO_EVENT_TYPE[type]} className="text-xs" />
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <EventActions row={row} />,
  },
];

const EventActions = ({ row }: { row: Row<Event> }) => {
  const deleteEvent = useDeleteEventById(row.original.id);

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link to={`/events/${row.original.id}`} target="_blank">
              Go to Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
            className="hover:cursor-pointer"
          >
            Copy event ID
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="hover:cursor-pointer">
                Edit
              </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="hover:cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>{row.getValue("title")}</AlertDialogHeader>
            <AlertDialogDescription>
              Are you sure you want to delete this event? This action cannot be
              undone.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteEvent.mutate()}
                className="bg-destructive text-white font-semibold hover:bg-destructive/80"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </DropdownMenuContent>
      </DropdownMenu>
    </AlertDialog>
  );
};
