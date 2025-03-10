import { EVENT_TYPES } from "@/types/event";
import { CiCircleQuestion, CiLaptop } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const EventTypeIcons: Record<
  (typeof EVENT_TYPES)[number],
  React.ReactNode
> = {
  virtual: <CiLaptop />,
  leetcode: <SiLeetcode />,
  hackathon: <FaCode />,
  meeting: <MdPeople />,
  project: <FaCode />,
  workshop: <FaCode />,
  challenge: <FaTrophy />,
  competition: <FaTrophy />,
  other: <CiCircleQuestion />,
};
