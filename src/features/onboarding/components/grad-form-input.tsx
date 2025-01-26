import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export const GradFormInput = () => {
  const form = useFormContext();
  const graduationOptions = useMemo(() => generateGraduationOptions(), []);

  function generateGraduationOptions(
    years = 4
  ): { label: string; value: Date }[] {
    const options: { label: string; value: Date }[] = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Determine the starting semester based on the current month
    const startingSemester = currentMonth < 6 ? "Fall" : "Spring";
    let year = startingSemester === "Fall" ? currentYear : currentYear + 1;

    for (let i = 0; i < years * 2; i++) {
      const semester = i % 2 === 0 ? "Spring" : "Fall";
      if (semester === "Spring") year++;
      const date = new Date(year, semester === "Spring" ? 0 : 6, 15);
      options.push({ label: `${semester} ${year}`, value: date });
    }

    return options;
  }

  return (
    <FormField
      control={form.control}
      name="gradDate"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>
            Graduation Date <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                // Find the corresponding option to set the date object rather than a string
                const selectedOption = graduationOptions.find(
                  (option) => option.label === value
                );
                field.onChange(selectedOption ? selectedOption.value : null);
              }}
            >
              <SelectTrigger className="w-fit px-4 gap-2">
                <SelectValue placeholder="Select graduation term" />
              </SelectTrigger>
              <SelectContent>
                {graduationOptions.map((option) => (
                  <SelectItem key={option.label} value={option.label}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
