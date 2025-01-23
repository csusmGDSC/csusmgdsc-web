"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedShapes } from "./animated-shapes";
import { Link } from "react-router-dom";
import { BiLeftTopArrowCircle } from "react-icons/bi";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useId, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(2).max(200),
  password: z.string(),
});

const SignIn = () => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Successfully signed in with " + values.email);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-4xl overflow-hidden border-0 shadow-transparent rounded-none">
        <div className="flex flex-col md:flex-row">
          {/* Left side: Animated shapes */}
          <div className="relative flex-1">
            <AnimatedShapes />
          </div>

          {/* Right side: Auth form */}
          <div className="flex-1 p-8">
            <CardHeader>
              <Link to="/" className="mb-4">
                <Button variant="link" className="p-0">
                  <BiLeftTopArrowCircle /> Back to Home
                </Button>
              </Link>
              <CardTitle className="text-2xl font-bold">
                Welcome Back!
              </CardTitle>
              <CardDescription className="font-mono text-blue">
                Sign in to your GDSC account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                            placeholder="Enter your email"
                            aria-invalid={!!form.formState.errors.email}
                            aria-describedby={`${id}-description`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="space-y-2">
                          <div className="relative">
                            <FormControl>
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                                placeholder="Enter your password"
                                aria-invalid={!!form.formState.errors.password}
                                aria-describedby={`${id}-description`}
                              />
                            </FormControl>
                            <button
                              type="button"
                              onClick={toggleShowPassword}
                              className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground"
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                <EyeOff size={16} strokeWidth={2} />
                              ) : (
                                <Eye size={16} strokeWidth={2} />
                              )}
                            </button>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue">
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <hr className="flex-1" />
                <span className="text-sm text-gray-500">or continue with</span>
                <hr className="flex-1" />
              </div>
              <div className="flex justify-center space-x-4">
                <SocialButton icon="google" />
                <SocialButton icon="github" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">New to GDSC?</span>
                <Link to={"/sign-up"}>
                  <Button variant="link" className="text-blue">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

function SocialButton({ icon }: { icon: "google" | "github" }) {
  const iconMap = {
    google: <FaGoogle className="h-5 w-5" />,
    github: <FaGithub className="h-5 w-5" />,
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full transition-transform hover:scale-110"
      // TODO: Add route for social button click
      onClick={() => {
        if (icon === "google") {
          // Add Google sign-in route
        } else if (icon === "github") {
          // Add GitHub sign-in route
        }
      }}
    >
      {iconMap[icon]}
    </Button>
  );
}
export default SignIn;
