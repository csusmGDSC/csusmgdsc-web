import { X } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AvatarCard = ({
  userId,
  fullName,
  email,
  imageSrc,
  removeButton,
  onRemove,
  className,
  imageClassName,
}: {
  userId: string;
  fullName: string;
  email: string;
  imageSrc: string;
  removeButton?: boolean;
  onRemove?: () => void;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative border border-border rounded-sm py-1 pl-2 pr-20 flex items-center gap-2 w-fit",
        className
      )}
    >
      <Link to={`/profile/${userId}`} target="_blank">
        <div
          className={cn(
            "flex size-8 items-center justify-center rounded-lg border border-border bg-background",
            imageClassName
          )}
          aria-hidden="true"
        >
          <img src={imageSrc} className="object-cover" />
        </div>
      </Link>
      <div>
        <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
          {fullName}
        </div>
        <div className="text-xs text-muted-foreground">{email}</div>
      </div>

      {removeButton && (
        <Button
          size="icon"
          className="absolute size-6 rounded-full -top-2 -right-3"
          onClick={(e) => {
            e.preventDefault();
            if (onRemove) {
              onRemove();
            }
          }}
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
};
