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
import { Event } from "@/types/event";
import { useNavigate } from "react-router-dom";

const EventsTable = () => {
  const mockEvents: Event[] = [
    {
      id: "event-001",
      title: "Intro to LeetCode",
      room: {
        building: "ACD",
        room: 123,
        type: 1,
        capacity: 10,
      },
      tags: ["leetcode", "coding", "interview prep"],
      startTime: new Date("2024-09-15T10:00:00"),
      endTime: new Date("2024-09-15T12:00:00"),
      type: 1,
      location: "California State University San Marcos",
      date: new Date("2024-09-15"),
      githubRepo: "https://github.com/gdsc/leetcode-workshop",
      slidesURL: "https://gdsc-slides.com/leetcode-intro",
      imageSrc: "https://gdsc-events.com/images/leetcode-intro.png",
      virtualURL: "https://gdsc.zoom.us/j/123456789",
      description:
        "Join us for an introduction to LeetCode and problem-solving strategies.",
      about: "We will cover basic algorithms and problem-solving techniques.",
      attendeeIds: ["user-101", "user-102"],
      organizerIds: ["user-001"],
      usersAttendedIds: ["user-101"],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "user-001",
    },
    {
      id: "event-002",
      title: "Hackathon Kickoff",
      room: null, // Virtual event
      tags: ["hackathon", "teamwork", "innovation"],
      startTime: new Date("2024-10-01T14:00:00"),
      endTime: new Date("2024-10-01T16:00:00"),
      type: 2,
      location: "Online",
      date: new Date("2024-10-01"),
      githubRepo: "https://github.com/gdsc/hackathon",
      slidesURL: "",
      imageSrc: "https://gdsc-events.com/images/hackathon.png",
      virtualURL: "https://gdsc.zoom.us/j/987654321",
      description:
        "Kick off our annual hackathon with project ideas and team formation!",
      about: "Teams will collaborate on exciting projects over a weekend.",
      attendeeIds: ["user-201", "user-202", "user-203"],
      organizerIds: ["user-002"],
      usersAttendedIds: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "user-002",
    },
    {
      id: "event-003",
      title: "Workshop on TypeScript",
      room: {
        building: "ACD",
        room: 123,
        type: 1,
        capacity: 10,
      },
      tags: ["typescript", "frontend", "web dev"],
      startTime: new Date("2024-09-20T09:00:00"),
      endTime: new Date("2024-09-20T11:00:00"),
      type: 3,
      location: "California State University San Marcos",
      date: new Date("2024-09-20"),
      githubRepo: "https://github.com/gdsc/typescript-workshop",
      slidesURL: "https://gdsc-slides.com/typescript-workshop",
      imageSrc: "https://gdsc-events.com/images/typescript.png",
      virtualURL: "",
      description:
        "Learn the fundamentals of TypeScript and how to use it in projects.",
      about:
        "This workshop is beginner-friendly and will cover TypeScript basics.",
      attendeeIds: ["user-301", "user-302"],
      organizerIds: ["user-003"],
      usersAttendedIds: ["user-301"],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "user-003",
    },
  ];

  return (
    <div>
      <EventsTableActions refresh={() => {}} />
      <DataTable
        columns={EventTableColumns}
        data={mockEvents}
        loading={false}
      />
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
