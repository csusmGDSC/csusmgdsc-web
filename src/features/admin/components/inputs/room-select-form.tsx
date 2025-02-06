import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildings, rooms } from "@/config/data";
import { useFormContext } from "react-hook-form";

export const RoomSelectForm = ({
  name,
  label,
  required = false,
  buttonClassName,
}: {
  name: string;
  label: string;
  required?: boolean;
  buttonClassName?: string;
}) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="flex flex-col flex-1 mt-2">
          <FormLabel>
            {label} {required && <span className="text-red">*</span>}
          </FormLabel>
          <FormControl>
            <Dialog>
              <DialogDescription>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    type="button"
                    className={buttonClassName}
                  >
                    Add Room
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div>
                    <label className="text-sm font-medium">Building</label>
                    <Select onValueChange={() => {}}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select building" />
                      </SelectTrigger>
                      <SelectContent>
                        {buildings.map((building) => (
                          <SelectItem value={building.id}>
                            {building.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Room</label>
                    <Select onValueChange={() => {}}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select building" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem value={room.building + " " + room.room}>
                            <div>
                              <p>{room.building + " " + room.room}</p>
                              <p className="text-xs text-muted-foreground">
                                {room.type} | Capacity: {room.capacity} seats
                              </p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </DialogContent>
              </DialogDescription>
            </Dialog>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
