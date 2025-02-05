import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "@/lib/providers";
import { Check, Minus } from "lucide-react";
import { useId } from "react";

const items = [
  { type: "light", label: "Light", image: "/images/ui-light.png" },
  { type: "dark", label: "Dark", image: "/images/ui-dark.png" },
  {
    type: "system",
    label: "System",
    image: "/images/ui-system.png",
  },
];

export default function ThemeSwitcher() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">
        Choose a theme
      </legend>
      <RadioGroup
        className="flex gap-3"
        defaultValue={theme}
        onValueChange={setTheme}
      >
        {items.map((item) => (
          <label key={`${id}-${item.type}`}>
            <RadioGroupItem
              id={`${id}-${item.type}`}
              value={item.type}
              className="peer sr-only after:absolute after:inset-0"
            />
            <img
              src={item.image}
              alt={item.label}
              width={88}
              height={70}
              className="relative cursor-pointer overflow-hidden rounded-sm border border-input outline-offset-2 transition-colors peer-[:focus-visible]:outline peer-[:focus-visible]:outline-2 peer-[:focus-visible]:outline-ring/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
            />
            <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
              <Check
                size={16}
                strokeWidth={2}
                className="peer-data-[state=unchecked]:group-[]:hidden"
                aria-hidden="true"
              />
              <Minus
                size={16}
                strokeWidth={2}
                className="peer-data-[state=checked]:group-[]:hidden"
                aria-hidden="true"
              />
              <span className="text-xs font-medium">{item.label}</span>
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
