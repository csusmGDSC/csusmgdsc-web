import { LinkFormInput } from "@/components/form-inputs/link-form-input";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { TextAreaFormInput } from "@/components/form-inputs/textarea-form-input";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TagsFormInput } from "@/features/onboarding/components/tags-form-input";
import { cn } from "@/lib/utils";
import { EVENT_TYPES } from "@/types/gdsc-event";
import { Clock } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";

export const BasicInfoForm = () => {
  const form = useFormContext();
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isXs, setIsXs] = useState(window.innerWidth <= 160);

  useEffect(() => {
    const handleResize = () => setIsXs(window.innerWidth <= 160);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center w-[calc(100%+2rem)] h-[250px] bg-primary-foreground -m-4 mb-4">
        <input
          type="file"
          className="hidden"
          ref={ref}
          onChange={(e) => {
            form.setValue("imageSrc", e.target.files?.[0]);
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            ref.current?.click();
          }}
          className="text-primary/70 hover:bg-blue/10 hover:text-blue/50 transition-colors rounded-sm bg-background absolute flex flex-col gap-2 items-center justify-center border border-dashed border-border py-12 px-20 lg:px-40"
        >
          <LuImagePlus size={32} />
          <p>Click or drop event image</p>
        </button>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-between gap-4">
        <div className="w-full flex-1 flex flex-col gap-4">
          <SimpleFormInput
            placeholder="Enter title"
            id="title"
            name="title"
            label="Title"
            required
          />

          <TextAreaFormInput
            placeholder="Enter short description"
            id="description"
            name="description"
            label="Description"
            required
          />
        </div>

        <div>
          <FormLabel>
            Date <span className="text-red">*</span>
          </FormLabel>
          <div
            className={cn(
              "rounded-sm border border-border mt-2 w-full",
              !isXs && "flex"
            )}
          >
            <Calendar
              mode="single"
              className="p-2"
              numberOfMonths={1}
              showOutsideDays={false}
              selected={date}
              onSelect={setDate}
              classNames={{
                day_selected:
                  "bg-blue hover:bg-darkBlue hover:text-white text-white",
              }}
            />
            <div
              className={cn(
                "border-border p-3 flex flex-col gap-4",
                !isXs ? "border-l border-t-0" : "border-t"
              )}
            >
              <div className="flex flex-col gap-1">
                <Label htmlFor={id} className="text-xs">
                  Start time
                </Label>
                <div className="relative grow">
                  <Input
                    id={id}
                    type="time"
                    step="1"
                    defaultValue="12:00:00"
                    className="peer appearance-none ps-9 pr-20 w-full [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Clock size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor={id} className="text-xs">
                  End time
                </Label>
                <div className="relative grow">
                  <Input
                    id={id}
                    type="time"
                    step="1"
                    defaultValue="12:00:00"
                    className="peer appearance-none ps-9 pr-20 w-full [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Clock size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="mt-4">
            <FormLabel>
              Type <span className="text-red">*</span>
            </FormLabel>
            <FormDescription>Choose the type of the event</FormDescription>
            <FormControl>
              <RadioGroup
                className="gap-2"
                defaultValue={field.value ?? ""}
                onValueChange={field.onChange}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
                  {EVENT_TYPES.map((type) => (
                    <div
                      key={type}
                      className="relative flex items-start gap-2 rounded-sm border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring"
                    >
                      <RadioGroupItem
                        value={type}
                        id={type}
                        aria-describedby={`1-description`}
                        className="order-1 after:absolute after:inset-0"
                      />
                      <div className="flex flex-row sm:flex-col grow items-start gap-3">
                        {/* <IconItem icon={GDSC_BRANCHES_ICONS[branch]} /> */}
                        <div className="grid grow gap-2">
                          <Label htmlFor={type}>{type}</Label>
                          <p
                            id={`${type}-description`}
                            className="text-xs text-muted-foreground"
                          >
                            This is desc
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <TagsFormInput />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <LinkFormInput
          name="virtualUrl"
          label="Meeting Link"
          placeholder="www.zoom.com"
          id={id}
          required={form.watch("type") === "virtual"}
        />
        <LinkFormInput
          name="githubRepoUrl"
          label="Github Repo"
          id={id}
          placeholder="www.github.com"
        />
        <LinkFormInput
          name="slidesURL"
          label="Link to slides"
          id={id}
          placeholder="www.sites.google.com"
        />
      </div>
    </div>
  );
};
