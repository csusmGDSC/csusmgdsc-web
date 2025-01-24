// React imports
import React, { useEffect, useMemo, useRef, useState } from "react";

// UI Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileCard } from "@/features/profile";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { SuccessMessage } from "@/features/base";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconItem } from "@/components/ui/icon-item";
import { Tag, TagInput } from "emblor";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Utils and Hooks
import { toast } from "sonner";
import {
  GDSC_BRANCH_DECSRIPTIONS,
  GDSC_BRANCHES,
  GDSC_BRANCHES_ICONS,
  GDSC_POSITIONS,
  GDSC_POSITIONS_ICONS,
  GDSC_POSITIONS_SELECTABLE,
  GDSC_POSITIONS_WITH_GRAD_DATE,
} from "@/types/gdsc-user";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z
  .object({
    firstName: z.string().min(2).max(100),
    lastName: z.string().min(2).max(100),
    email: z.string().email("Invalid email address").min(2).max(200),
    image: z.union([
      z.instanceof(File, { message: "Image is required" }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ]),
    gradDate: z.date().optional(),
    branch: z.enum(GDSC_BRANCHES).nullable(),
    position: z.enum(GDSC_POSITIONS).nullable(),
    bio: z.string().min(0).max(250).optional(),
    tags: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    website: z.string().url().optional().or(z.literal("")), // OPTIONAL URL: https://github.com/colinhacks/zod/discussions/1254
    github: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal("")),
    discord: z.string().optional(),
  })
  .refine((data) => data.position !== null, {
    message: "Position is required.",
    path: ["position"],
  })
  .refine((data) => data.branch !== null, {
    message: "Branch is required.",
    path: ["branch"],
  })
  .refine(
    (data) => {
      if (
        (data.position === "student" || data.position === "alumni") &&
        !data.gradDate
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Graduation date is required for students and alumni.",
      path: ["gradDate"],
    }
  );

export const OnboardingForm = () => {
  //   const [previewMode, setPreviewMode] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const graduationOptions = useMemo(() => generateGraduationOptions(), []);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "jaedonspurlock@gmail.com",
      image: "https://avatar.iran.liara.run/public",
      gradDate: undefined,
      branch: null,
      position: null,
      bio: "",
      tags: [],
      website: "",
      github: "",
      linkedin: "",
      instagram: "",
      twitter: "",
      discord: "",
    },
  });

  const image = form.watch("image");
  useEffect(() => {
    if (image instanceof File) {
      const imageUrl = URL.createObjectURL(image);
      setImagePreview(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
    if (typeof image === "string") {
      setImagePreview(image);
    }
  }, [image]);

  const generateRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    form.setValue(
      "image",
      `https://avatar.iran.liara.run/public/${randomNumber}`
    );
    setImagePreview(`https://avatar.iran.liara.run/public/${randomNumber}`);

    if (imageInputRef.current) {
      imageInputRef.current.value = ""; // Reset the file input
    }
  };

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    let imageUrl: string | undefined;
    if (values.image instanceof File) {
      // build FormData for uploading image
      const formData = new FormData();
      formData.append("file", values.image);

      // upload image
      imageUrl = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("https://via.placeholder.com/150");
        }, 1000);
      });
    } else {
      imageUrl = values.image; // Use the existing image URL for updating mode
    }

    toast.success("Submitted successfully! Check console for imageUrl");
    console.log(imageUrl);
  };

  return (
    <ResponsiveSideBySide>
      <Card className="lg:col-span-2 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <div className="flex gap-6">
              {/* EMAIL PREVIEW (CAN'T CHANGE) */}
              <div>
                <p className="text-sm font-medium">
                  <span className="text-primary font-medium">Email</span>{" "}
                </p>

                <p className="text-muted-foreground text-sm">
                  {form.watch("email")}
                </p>
              </div>

              {/* EMAIL PREVIEW (CAN'T CHANGE) */}
              <div>
                <p className="text-sm font-medium">
                  <span className="text-primary font-medium">Created on</span>{" "}
                </p>

                <p className="text-muted-foreground text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* FIRST NAME INPUT */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>
                      First Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* LAST NAME INPUT */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>
                      Last Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Status <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormDescription>Select your current status.</FormDescription>
                  <FormControl>
                    <RadioGroup
                      className="flex flex-wrap"
                      defaultValue={field.value || ""}
                      onValueChange={field.onChange}
                      aria-orientation="horizontal"
                    >
                      {GDSC_POSITIONS_SELECTABLE.map((position) => (
                        <label
                          key={position}
                          className="relative flex cursor-pointer flex-col items-center gap-3 rounded-sm border border-input px-4 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                        >
                          <RadioGroupItem
                            id={position}
                            value={position}
                            className="sr-only after:absolute after:inset-0"
                          />
                          <IconItem icon={GDSC_POSITIONS_ICONS[position]} />
                          <p className="text-xs font-medium leading-none text-foreground">
                            {position}
                          </p>
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {GDSC_POSITIONS_WITH_GRAD_DATE.includes(
              form.watch(
                "position"
              ) as (typeof GDSC_POSITIONS_WITH_GRAD_DATE)[number]
            ) && (
              <FormField
                control={form.control}
                name="gradDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>
                      Graduation Date{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          // Find the corresponding option to set the date object rather than a string
                          const selectedOption = graduationOptions.find(
                            (option) => option.label === value
                          );
                          field.onChange(
                            selectedOption ? selectedOption.value : null
                          );
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
            )}

            <div>
              <p className="text-sm font-medium mb-2">Profile Image</p>
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={imagePreview || ""}
                    alt="avatar"
                    className="bg-background rounded-sm w-32 h-32 border border-border object-cover overflow-hidden"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-xs p-1 h-fit"
                    onClick={() => generateRandomAvatar()}
                  >
                    generate random
                  </Button>
                </div>

                <Controller
                  name="image"
                  control={form.control}
                  render={(field) => (
                    <div>
                      <Input
                        className="pe-3 file:pe-3 file:me-3 file:border-0 file:border-e"
                        type="file"
                        accept="image/*"
                        ref={imageInputRef}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setImagePreview(
                            file ? URL.createObjectURL(file) : imagePreview
                          );
                        }}
                      />
                      <p className="text-xs text-muted-foreground my-4">
                        .png, .jpeg, .webp files up to 8MB. Recommended size is
                        256x256px.
                      </p>
                      {field.fieldState.error && (
                        <p className="text-destructive">
                          {field.fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>

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
                      defaultValue={field.value ?? ""}
                      onValueChange={field.onChange}
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
                                  {GDSC_BRANCH_DECSRIPTIONS[branch]}
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

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Tell us about yourself such as your skills, experience, and any other relevant information."
                        className="rounded-sm"
                        {...field}
                      />
                      <p
                        className="mt-2 text-xs text-muted-foreground"
                        role="region"
                        aria-live="polite"
                      >
                        {field.value
                          ? `${field.value.length} / 250`
                          : "0 / 250"}
                      </p>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-left">Tags</FormLabel>
                  <FormDescription>
                    Add some tags to help others find you better in the
                    community. Example tags: Frontend, Backend, Fullstack
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
                        form.setValue("tags", newTags as [Tag, ...Tag[]]);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4">
              {/* GITHUB */}
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Links</FormLabel>
                    <FormControl>
                      <div className="items-center flex gap-4">
                        <FaGithub /> <Input placeholder="github" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* LINKEDIN */}
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="items-center flex gap-4">
                        <FaLinkedin />{" "}
                        <Input placeholder="linkedin" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* INSTAGRAM */}
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="items-center flex gap-4">
                        <FaInstagram />{" "}
                        <Input placeholder="instagram" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DISCORD */}
              <FormField
                control={form.control}
                name="discord"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="items-center flex gap-4">
                        <FaDiscord />{" "}
                        <Input placeholder="discord username" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PERSONAL WEBSITE */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="items-center flex gap-4">
                        <FaExternalLinkAlt />{" "}
                        <Input
                          placeholder="any other website you'd like to add"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Card>

      <div className="relative">
        <ProfileCard
          name={form.watch("firstName") + " " + form.watch("lastName")}
          bio={form.watch("bio")}
          role={form.watch("branch") || ""}
          imageSrc={imagePreview || ""}
          discord={form.watch("discord")}
          github={form.watch("github")}
          linkedin={form.watch("linkedin")}
          instagram={form.watch("instagram")}
          website={form.watch("website")}
          tags={form.watch("tags") || []}
          hideReport
          userId="67683838-cc0a-4cd4-aa68-02756335285e"
          className="sticky top-12 h-fit"
        />
      </div>
    </ResponsiveSideBySide>
  );
};

export const ResponsiveSideBySide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const components = React.Children.toArray(children);

  const [activeTab, setActiveTab] = useState("tab0");

  return (
    <div className="w-full relative">
      {/* Large screen: Side-by-side layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <div key={index} className={index == 0 ? "col-span-2" : "col-span-1"}>
            {component}
          </div>
        ))}
      </div>

      {/* Small screen: Tabbed layout */}
      <div className="lg:hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger key={0} value={`tab0`}>
              Edit
            </TabsTrigger>

            <TabsTrigger key={1} value={`tab1`}>
              Preview
            </TabsTrigger>
          </TabsList>
          {components.map((component, index) => (
            <TabsContent
              key={index}
              value={`tab${index}`}
              className={index == 1 ? "mt-14" : "mt-6"}
            >
              {component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
