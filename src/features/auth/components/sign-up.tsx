"use client";

// React Imports
import { useId, useState } from "react";

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
import { Link } from "react-router-dom";
import { NewPasswordInput } from "@/components/form-inputs/new-password-input";
import { HomeButton } from "./home-button";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { OauthButtons } from "./oauth-buttons";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

// Utils
import { SignUpSchema } from "../schemas/auth-schemas";
import FormCard from "./form-card";
import { useSignUp } from "@/api/auth-api";

// Theme management
import { useTheme } from "@/lib/providers";

/**
 * SignUp component renders a sign-up form with email and password fields.
 * It includes password strength validation and visual feedback for password requirements.
 * Users can toggle password visibility and submit the form to create an account.
 * The component also provides options to sign up with Google or GitHub.
 *
 * @returns JSX element representing the sign-up page.
 */
const SignUp = () => {
  const signUp = useSignUp();
  const id = useId();
  const { theme } = useTheme();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [showSuccess, setShowSuccess] = useState(false);

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    if (values.password !== values.confirmPassword) {
      return;
    }
    signUp.mutate(values, {
      onSuccess: () => setShowSuccess(true),
    });
  }

  return (
    <div className="w-full flex h-screen items-center justify-center">
      {!showSuccess ? (
        <Card className="w-full max-w-4xl overflow-hidden border-0 shadow-transparent rounded-none">
          <div className="flex flex-col md:flex-row">
            {/* Left side: Animated shapes */}
            <div className="relative flex-1 hidden md:flex items-center">
              <img
                src={
                  theme == "light"
                    ? "/images/stock/stock-3.jpeg"
                    : "/images/stock/stock-3-dark.jpeg"
                }
                alt="background-image"
                className="select-none"
                width={700}
                height={700}
              />
            </div>

            <div className="flex-1 p-8">
              <CardHeader>
                <HomeButton />
                <CardTitle className="text-2xl font-bold">
                  Join the Club!
                </CardTitle>
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
                    <SimpleFormInput
                      name="email"
                      id={id}
                      label="Email"
                      placeholder="Enter your email"
                    />
                    <NewPasswordInput id={id} />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={signUp.isPending}
                    >
                      Register
                    </Button>
                  </form>
                </Form>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <OauthButtons />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Already have an account?</span>
                  <Link to={"/auth/sign-in"}>
                    <Button variant="link" className="text-blue">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>
      ) : (
        <FormCard label="Account created">
          <div className="w-full flex justify-center">
            <img
              src="/images/stock/stock-1.png"
              alt="sent email image"
              className="w-[50%]"
            />
          </div>
          <div className="w-full text-center my-10">
            <p className="text-primary text-lg">Thank you</p>
            <p className="text-sm text-muted-foreground">
              A confirmation email is on its way to{" "}
              <span className="font-medium">{form.getValues("email")}</span>
            </p>
          </div>

          <div className="flex justify-center">
            <Button>
              <Link to="/auth/sign-in">Back to Sign In</Link>
            </Button>
          </div>
        </FormCard>
      )}
    </div>
  );
};

export default SignUp;
