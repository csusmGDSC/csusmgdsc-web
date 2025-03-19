import { Button } from "@/components/ui/button";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { buildings, rooms } from "@/config/data";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IOTA_TO_ROOM_TYPE } from "@/types/room";
import { RoomCard } from "@/components/ui/room-card";

export const RoomSelectForm = ({
  name,
  label,
  required = false,
}: {
  name: "room";
  label: string;
  required?: boolean;
}) => {
  const form = useFormContext<z.infer<typeof EventSchema>>();

  return (
    <div className="flex flex-col gap-2">
      <FormLabel>
        {label} {required && <span className="text-red">*</span>}
      </FormLabel>

      {form.watch(name) && form.watch(name)?.type && (
        <RoomCard
          building={form.watch(name)?.building || ""}
          room={form.watch(name)?.room || 0}
          type={form.watch(name)?.type as keyof typeof IOTA_TO_ROOM_TYPE}
          capacity={form.watch(name)?.capacity || 0}
          removeButton
          onRemove={() => {
            form.setValue(name, null);
          }}
        />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-fit px-10 mt-2"
            aria-label="Open edit menu"
          >
            Pick room
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="pb-2 overflow-y-scroll max-h-[20rem]"
          align="start"
        >
          {buildings.map((value) => (
            <div key={value.id}>
              <DropdownMenuLabel>{value.name}</DropdownMenuLabel>

              {rooms
                .filter((room) => room.building === value.id)
                .map((room) => (
                  <DropdownMenuItem
                    key={room.room}
                    onClick={() =>
                      form.setValue(name, {
                        building: room.building,
                        room: room.room,
                        type: room.type,
                        capacity: room.capacity,
                      })
                    }
                  >
                    <div>
                      <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
                        {room.building} {room.room}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {IOTA_TO_ROOM_TYPE[room.type]} | capacity:{" "}
                        {room.capacity}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {form.formState.errors[name] && (
        <FormMessage>{form.formState.errors[name].message}</FormMessage>
      )}
    </div>
  );
};
