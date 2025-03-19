"use client";

import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";

import {
  TableActionButton,
  TableActionButtonProps,
} from "./table-action-button";
import { DataTable } from "./data-table";
import { EventTableColumns } from "./events-column-def";
import { useNavigate } from "react-router-dom";
import { useEvents } from "@/api/event-api";

const EventsTable = () => {
  const { data: events } = useEvents();

  return (
    <div>
      <EventsTableActions refresh={() => {}} />
      <DataTable columns={EventTableColumns} data={events} loading={false} />
    </div>
  );
};

export default EventsTable;

/**
 * A component that renders the actions for the events table, including a list of buttons and a filter input.
 *
 * @return {JSX.Element} The JSX element representing the events table actions.
 */
const EventsTableActions = ({ refresh }: { refresh: () => void }) => {
  const navigate = useNavigate();

  const ButtonActions: TableActionButtonProps[] = [
    {
      action: "Add",
      icon: IoMdAdd,
      className: "hover:text-blue/80",
      id: "add",
      onClick: () => navigate("/admin/create-event"),
    },
    {
      action: "Refresh",
      icon: LuRefreshCw,
      className: "hover:text-blue/80",
      id: "refresh",
      onClick: () => refresh(),
    },
  ];

  return (
    <div className="flex items-center flex-wrap gap-4 text-blue pb-4">
      {ButtonActions.map((action) => (
        <TableActionButton key={action.action} {...action} />
      ))}
      <span className="relative w-[20rem]">
        <Input placeholder="Filter events..." className="max-w-xs" />
        <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
      </span>
    </div>
  );
};
