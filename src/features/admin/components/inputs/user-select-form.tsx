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
import { X } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function UserSelectForm({
  name,
  label,
  required = false,
}: {
  name: string;
  label: string;
  required?: boolean;
}) {
  const form = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <FormLabel>
        {label} {required && <span className="text-red">*</span>}
      </FormLabel>

      {form.watch(name).length > 0 &&
        form.watch(name).map((userId: string) => (
          <div className="relative border border-border rounded-sm py-1 pl-2 pr-20 flex items-center gap-2 w-fit">
            <div
              className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
              aria-hidden="true"
            >
              <img src={""} className="object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
                {userId}
              </div>
              <div className="text-xs text-muted-foreground">
                test@gmail.com
              </div>
            </div>

            <Button
              size="icon"
              className="absolute size-6 rounded-full -top-2 -right-3"
              onClick={() => {
                form.setValue(
                  name,
                  form.watch(name).filter((id: string) => id !== userId)
                );
              }}
            >
              <X className="size-4" />
            </Button>
          </div>
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
}
