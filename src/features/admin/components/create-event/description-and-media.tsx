import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MDEditor from "@uiw/react-md-editor";
import { commands } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useFormContext } from "react-hook-form";
import { EmbedYoutubeLink } from "./embed-youtube-link";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { UserSelectForm } from "../inputs/user-select-form";
import { RoomSelectForm } from "../inputs/room-select-form";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";
import { IOTA_TO_EVENT_TYPE } from "@/types/event";
import { useTheme } from "@/lib/providers";

export const DescriptionAndMediaForm = () => {
  const form = useFormContext<z.infer<typeof EventSchema>>();
  const theme = useTheme();

  return (
    <div className="space-y-10">
      <SimpleFormInput
        name="location"
        label="Location"
        required
        id="location"
        placeholder="Enter location (i.e. California State San Marcos)"
        className="flex-1"
      />

      <RoomSelectForm
        name="room"
        label="Room"
        required={
          IOTA_TO_EVENT_TYPE[form.watch("type")] !== "virtual" &&
          IOTA_TO_EVENT_TYPE[form.watch("type")] !== "leetcode"
        }
      />

      <UserSelectForm name="organizerIds" label="Organizers" required />

      <FormField
        control={form.control}
        name="about"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="w-full" data-color-mode={theme}>
                <FormLabel>Description</FormLabel>
                <FormDescription>
                  In-depth description of the event. This editor has markdown
                  support with youtube link embeds. Please utilize markdown to
                  help further engage the user to the event.
                </FormDescription>
                <MDEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                  textareaProps={{
                    maxLength: 2000,
                    placeholder:
                      "Enter markdown here, you can include code samples, links, and more",
                  }}
                  className="mt-2"
                  extraCommands={[
                    EmbedYoutubeLink,
                    commands.codeEdit,
                    commands.codeLive,
                    commands.codePreview,
                    commands.fullscreen,
                  ]}
                />
                <p className="text-sm text-primary/80">
                  {field.value?.length || 0}/{2000}
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
