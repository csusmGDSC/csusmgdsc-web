import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";

interface AnnouncementProps {
  onClick?: () => void;
  children: React.ReactNode;
  color: "red" | "green" | "blue" | "yellow";
}

/**
 * Renders an announcement component with a colored background and arrow icon.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - The click event handler.
 * @param {string} props.text - The text to display in the announcement.
 * @param {string} props.color - The color of the announcement. Can be "red", "green", "blue", or "yellow".
 * @return {JSX.Element} The rendered announcement component.
 */
export const Announcement = ({ children, color }: AnnouncementProps) => {
  const bgColors = {
    red: "bg-red/10",
    green: "bg-green/10",
    blue: "bg-blue/10",
    yellow: "bg-yellow/10",
  };

  return (
    <div
      className={cn(
        "relative flex items-center md:justify-center px-4 md:px-0 gap-2 py-2 z-10",
        bgColors[color]
      )}
    >
      {children}

      <IoMdClose className="hover:bg-primary/20 hover:rounded-full transition-all p-2 w-10 h-10 absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer text-primary" />
    </div>
  );
};
