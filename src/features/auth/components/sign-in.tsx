"use client";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { PasswordInput } from "@/components/form-inputs/password-input";
import { HomeButton } from "./home-button";
import { OauthButtons } from "./oauth-buttons";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

// Utils
import { useId } from "react";
import { Link } from "react-router-dom";
import { SignInSchema } from "../schemas/auth-schemas";
import { useSignIn } from "@/auth/auth-api";

/**
 * SignIn component renders a sign-in form with email and password fields.
 * It includes password strength validation and visual feedback for password requirements.
 * Users can toggle password visibility and submit the form to sign in.
 * The component also provides options to sign in with Google or GitHub.
 *
 * @returns JSX element representing the sign-in component.
 */
const SignIn = () => {
  const signIn = useSignIn();
  const id = useId();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    signIn.mutate(values);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-4xl overflow-hidden border-0 shadow-transparent rounded-none">
        <div className="flex flex-col md:flex-row">
          {/* Left side: Animated shapes */}
          <div className="relative flex-1 hidden md:flex items-center">
            <img
              src="/images/stock/stock-2.jpeg"
              alt="background-image"
              className="select-none"
              width={700}
              height={700}
            />
          </div>

          {/* Right side: Auth form */}
          <div className="flex-1 p-8">
            <CardHeader>
              <HomeButton />
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
                  <SimpleFormInput
                    name="email"
                    id={id}
                    placeholder="Enter your email"
                    label="Email"
                  />
                  <PasswordInput id={id} showForgotPassword={true} />

                  <Button
                    type="submit"
                    className="w-full bg-blue"
                    disabled={signIn.isPending}
                  >
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <OauthButtons />
              <div className="flex items-center justify-center">
                <span className="text-sm">New to GDSC?</span>
                <Link to={"/auth/sign-up"}>
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

export default SignIn;
