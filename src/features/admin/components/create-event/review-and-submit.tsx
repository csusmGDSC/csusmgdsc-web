import { FormLabel } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";
import { AvatarCard } from "@/components/ui/avatar-card";
import { GrGithub } from "react-icons/gr";
import { SiGoogleslides } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { EventTypeBadge } from "@/components/ui/event-type-badge";
import { RoomCard } from "@/components/ui/room-card";
import { IOTA_TO_ROOM_TYPE } from "@/types/room";
import { IOTA_TO_EVENT_TYPE } from "@/types/event";

import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/lib/providers";

export const ReviewAndSubmit = () => {
  const form = useFormContext<z.infer<typeof EventSchema>>();
  const theme = useTheme();

  return (
    <div className="space-y-4">
      {form.watch("imageSrc") && (
        <div>
          <FormLabel>Image</FormLabel>
          <img
            src={URL.createObjectURL(form.watch("imageSrc") as File)}
            className="w-full h-[200px] object-cover rounded-sm border border-border"
          />
        </div>
      )}

      <div>
        <FormLabel>Title</FormLabel>
        <p className="text-muted-foreground text-sm">{form.watch("title")}</p>
      </div>

      <div>
        <FormLabel>Short Description</FormLabel>
        <p className="text-muted-foreground text-sm">
          {form.watch("description")}
        </p>
      </div>

      <div>
        <FormLabel>Date</FormLabel>
        <p className="text-muted-foreground text-sm">
          {" "}
          {form.watch("date").toDateString()}
        </p>
      </div>

      <div className="flex gap-4">
        <div>
          <FormLabel>Start Time</FormLabel>
          <p className="text-muted-foreground text-sm">
            {form.watch("startTime")?.toLocaleTimeString()}
          </p>
        </div>

        <div>
          <FormLabel>End Time</FormLabel>
          <p className="text-muted-foreground text-sm">
            {form.watch("endTime")?.toLocaleTimeString()}
          </p>
        </div>

        <div>
          <FormLabel>Duration</FormLabel>
          <p className="text-muted-foreground text-sm">
            {(() => {
              const startTime = form.watch("startTime");
              const endTime = form.watch("endTime");
              if (startTime && endTime) {
                const difference =
                  (endTime.getTime() - startTime.getTime()) / 60000;
                const hours = Math.floor(difference / 60);
                const minutes = difference % 60;
                return `${hours} hours ${minutes} minutes`;
              }
              return "N/A";
            })()}
          </p>
        </div>
      </div>

      <div>
        <FormLabel>Type</FormLabel>
        <EventTypeBadge type={IOTA_TO_EVENT_TYPE[form.watch("type")]} />
      </div>

      <div>
        <FormLabel>Links</FormLabel>
        <ul className="flex flex-col gap-2">
          {[
            form.watch("virtualURL"),
            form.watch("githubRepo"),
            form.watch("slidesURL"),
          ].map((link, index) =>
            link ? (
              <li key={index} className="flex items-center gap-2">
                {index === 0 ? (
                  <BsMicrosoftTeams className="text-darkBlue size-6" />
                ) : index === 1 ? (
                  <GrGithub className="size-6" />
                ) : (
                  <SiGoogleslides className="text-yellow size-6" />
                )}
                <Link to={link} target="_blank">
                  <p className="text-blue hover:underline text-sm line-clamp-1">
                    {link}
                  </p>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </div>

      <div>
        <FormLabel>Location</FormLabel>
        <span className="flex items-center gap-2">
          <img src="/images/csusm-logo.png" className="aspect-square size-8" />
          <p>{form.watch("location") || "No Location Specified"}</p>
        </span>
      </div>

      {form.watch("room") && form.watch("room")?.type && (
        <div>
          <FormLabel>Room</FormLabel>
          <RoomCard
            building={form.watch("room")?.building || ""}
            room={form.watch("room")?.room || 0}
            type={form.watch("room")?.type as keyof typeof IOTA_TO_ROOM_TYPE}
            capacity={form.watch("room")?.capacity || 0}
            removeButton={false}
          />
        </div>
      )}

      <div>
        <FormLabel>Organizers</FormLabel>
        <ul className="flex flex-wrap gap-2">
          {form.watch("organizerIds").map((organizerId: string) => (
            <AvatarCard
              key={organizerId}
              userId={organizerId}
              fullName="John Doe"
              email="8UOx1@example.com"
              imageSrc="https://avatar.iran.liara.run/public"
            />
          ))}
        </ul>
      </div>

      <Separator className="w-[calc(100%+2rem)] -mx-4" />

      {form.watch("about") && (form.watch("about") as string).length > 0 && (
        <div data-color-mode={theme}>
          <FormLabel>About</FormLabel>
          <MDEditor.Markdown source={form.watch("about")} />
        </div>
      )}
    </div>
  );
};
