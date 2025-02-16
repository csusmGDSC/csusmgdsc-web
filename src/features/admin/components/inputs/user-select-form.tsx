import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormLabel } from "@/components/ui/form";
import { leads } from "@/tests/mock/team";
import { useFormContext } from "react-hook-form";
import { EventSchema } from "../../schemas/event-schema";
import { z } from "zod";
import { AvatarCard } from "@/components/ui/avatar-card";

export const UserSelectForm = ({
  name,
  label,
  required = false,
}: {
  name: "organizerIds";
  label: string;
  required?: boolean;
}) => {
  const form = useFormContext<z.infer<typeof EventSchema>>();

  return (
    <div className="flex flex-col gap-2">
      <FormLabel>
        {label} {required && <span className="text-red">*</span>}
      </FormLabel>

      {form.watch(name).length > 0 &&
        form.watch(name).map((userId: string, index: number) => (
          <AvatarCard
            key={index}
            imageSrc={
              leads.find((lead) => lead.userId === userId)?.imageSrc || ""
            }
            fullName={
              leads.find((lead) => lead.userId === userId)?.name || "No Name"
            }
            email={
              leads.find((lead) => lead.userId === userId)?.email || "No Email"
            }
            userId={userId}
            removeButton
            onRemove={() => {
              form.setValue(
                name,
                form.watch(name).filter((id: string) => id !== userId)
              );
            }}
          />
        ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-fit px-10 mt-2"
            aria-label="Open edit menu"
          >
            Add user
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="pb-2 overflow-y-scroll max-h-[20rem]"
          align="start"
        >
          <DropdownMenuLabel>Project</DropdownMenuLabel>

          {leads.map((lead) => (
            <DropdownMenuItem
              key={lead.userId}
              onClick={() =>
                form.setValue(name, [...form.watch(name), lead.userId])
              }
            >
              <div
                className="flex size-8 items-center justify-center rounded-sm border border-border bg-background"
                aria-hidden="true"
              >
                <img src={lead.imageSrc} className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
                  {lead.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {lead.email}
                </div>
              </div>
            </DropdownMenuItem>
          ))}

          <DropdownMenuLabel>Leetcode</DropdownMenuLabel>

          {leads.map((lead) => (
            <DropdownMenuItem
              key={lead.userId}
              onClick={() =>
                form.setValue(name, [...form.watch(name), lead.userId])
              }
            >
              <div
                className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
                aria-hidden="true"
              >
                <img src={lead.imageSrc} className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
                  {lead.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {lead.email}
                </div>
              </div>
            </DropdownMenuItem>
          ))}

          <DropdownMenuLabel>Marketing</DropdownMenuLabel>

          {leads.map((lead) => (
            <DropdownMenuItem
              key={lead.userId}
              onClick={() =>
                form.setValue(name, [...form.watch(name), lead.userId])
              }
            >
              <div
                className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
                aria-hidden="true"
              >
                <img src={lead.imageSrc} className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
                  {lead.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {lead.email}
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
