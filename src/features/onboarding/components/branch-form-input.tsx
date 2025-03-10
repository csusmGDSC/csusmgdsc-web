import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconItem } from "@/components/ui/icon-item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  GDSC_BRANCH_DESCRIPTIONS,
  GDSC_BRANCH_IOTA,
  GDSC_BRANCHES,
  GDSC_BRANCHES_ICONS,
  IOTA_TO_GDSC_BRANCH,
} from "@/types/user";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { ProfileSchema } from "../schemas/profile-schema";

export const BranchFormInput = () => {
  const form = useFormContext<z.infer<typeof ProfileSchema>>();

  return (
    <FormField
      control={form.control}
      name="branch"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Branch <span className="text-destructive">*</span>
          </FormLabel>
          <FormDescription>What branch fits you best?</FormDescription>
          <FormControl>
            <RadioGroup
              className="gap-2"
              defaultValue={IOTA_TO_GDSC_BRANCH[field.value] ?? ""}
              onValueChange={(value: (typeof GDSC_BRANCHES)[number]) =>
                field.onChange(GDSC_BRANCH_IOTA[value])
              }
            >
              <div className="flex flex-col sm:flex-row gap-2">
                {GDSC_BRANCHES.map((branch) => (
                  <div
                    key={branch}
                    className="relative flex w-full items-start gap-2 rounded-sm border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring"
                  >
                    <RadioGroupItem
                      value={branch}
                      id={branch}
                      aria-describedby={`1-description`}
                      className="order-1 after:absolute after:inset-0"
                    />
                    <div className="flex flex-row sm:flex-col grow items-start gap-3">
                      <IconItem icon={GDSC_BRANCHES_ICONS[branch]} />
                      <div className="grid grow gap-2">
                        <Label htmlFor={branch}>{branch}</Label>
                        <p
                          id={`${branch}-description`}
                          className="text-xs text-muted-foreground"
                        >
                          {GDSC_BRANCH_DESCRIPTIONS[branch]}
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
  );
};
