import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { z } from "zod";
import { ProfileSchema } from "../schemas/profile-schema";

const socialLinks = [
  { name: "github", icon: <FaGithub />, placeholder: "github" },
  { name: "linkedin", icon: <FaLinkedin />, placeholder: "linkedin" },
  { name: "instagram", icon: <FaInstagram />, placeholder: "instagram" },
  { name: "discord", icon: <FaDiscord />, placeholder: "discord username" },
  {
    name: "website",
    icon: <FaExternalLinkAlt />,
    placeholder: "any other website you'd like to add",
  },
];

export const SocialInputField = ({}: {}) => {
  const form = useFormContext<z.infer<typeof ProfileSchema>>();
  return (
    <div className="flex flex-col gap-4">
      <FormLabel>Links</FormLabel>
      {socialLinks.map((link) => (
        <FormField
          key={link.name}
          control={form.control}
          name={link.name as keyof z.infer<typeof ProfileSchema>}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="flex items-center gap-4">
                  {link.icon}{" "}
                  <Input
                    placeholder={link.placeholder}
                    {...field}
                    value={field.value?.toString()}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};
