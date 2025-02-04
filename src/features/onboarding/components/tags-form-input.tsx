import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TagInput, Tag } from "emblor";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const TagsFormInput = () => {
  const form = useFormContext();
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem className="flex flex-col items-start">
          <FormLabel className="text-left">Tags</FormLabel>
          <FormDescription>
            Add some tags to help others find you better in the community.
            Example tags: Frontend, Backend, Fullstack
          </FormDescription>
          <FormControl>
            <TagInput
              {...field}
              placeholder="Add a tag"
              tags={tags}
              styleClasses={{
                tagList: {
                  container: "gap-1",
                },
                input:
                  "rounded-sm transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20",
                tag: {
                  body: "relative h-7 bg-background border border-input hover:bg-background rounded-sm font-medium text-xs ps-2 pe-7",
                  closeButton:
                    "absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground",
                },
              }}
              inlineTags={false}
              inputFieldPosition="top"
              activeTagIndex={activeTagIndex}
              setActiveTagIndex={setActiveTagIndex}
              maxTags={4}
              minLength={2}
              maxLength={20}
              className="sm:min-w-[450px]"
              setTags={(newTags) => {
                setTags(newTags);
                form.setValue(
                  "tags",
                  form.setValue(
                    "tags",
                    (newTags as Tag[]).map((tag) => tag.text) as [
                      string,
                      ...string[]
                    ]
                  )
                );
              }}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
