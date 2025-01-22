"use client";

// React Imports
import { useId, useMemo, useState } from "react";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// Form handling
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
import { ArrowRight, Check, Eye, EyeOff, X } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(2).max(25),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be less than 25 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

/**
 * SignUp component renders a sign-up form with email and password fields.
 * It includes password strength validation and visual feedback for password requirements.
 * Users can toggle password visibility and submit the form to create an account.
 * The component also provides options to sign up with Google or GitHub.
 *
 * @returns JSX element representing the sign-up page.
 */
const SignUp = () => {
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

  const checkStrength = (password: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
  };

  const strength = checkStrength(form.watch("password") || "");

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full flex h-screen items-center justify-center">
      <Card className="w-full max-w-xl overflow-hidden border-0 shadow-transparent rounded-none">
        {/* Right side: Auth form */}
        <div className="flex-1 p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Join the Club!</CardTitle>
            <CardDescription className="font-mono text-blue">
              Create your GDSC account
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
                  rules={{
                    required: "Password is required",
                    validate: (value) => {
                      const strength = checkStrength(value);
                      const score = strength.filter((req) => req.met).length;
                      if (score < 4) {
                        return "Password does not meet all requirements";
                      }
                      return true;
                    },
                  }}
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
                              aria-invalid={strengthScore < 4}
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

                        {/* Password strength indicator */}
                        <div
                          className="h-1 w-full overflow-hidden rounded-full bg-border"
                          role="progressbar"
                          aria-valuenow={strengthScore}
                          aria-valuemin={0}
                          aria-valuemax={4}
                        >
                          <div
                            className={`h-full ${getStrengthColor(
                              strengthScore
                            )} transition-all duration-500 ease-out`}
                            style={{ width: `${(strengthScore / 4) * 100}%` }}
                          />
                        </div>

                        {/* Password strength description */}
                        <p className="text-sm font-medium text-foreground">
                          {getStrengthText(strengthScore)}. Must contain:
                        </p>

                        {/* Requirements list */}
                        <ul className="space-y-1.5">
                          {strength.map((req, index) => (
                            <li key={index} className="flex items-center gap-2">
                              {req.met ? (
                                <Check size={16} className="text-emerald-500" />
                              ) : (
                                <X
                                  size={16}
                                  className="text-muted-foreground/80"
                                />
                              )}
                              <span
                                className={`text-xs ${
                                  req.met
                                    ? "text-emerald-600"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {req.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full group">
                  Continue{" "}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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
              <span className="text-sm">Already have an account?</span>
              <Link to={"/sign-in"}>
                <Button variant="link" className="text-blue">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardFooter>
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
export default SignUp;
