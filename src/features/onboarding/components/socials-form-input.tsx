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
  const form = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <FormLabel>Links</FormLabel>
      {socialLinks.map((link) => (
        <FormField
          control={form.control}
          name={link.name}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="flex items-center gap-4">
                  {link.icon}{" "}
                  <Input placeholder={link.placeholder} {...field} />
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
