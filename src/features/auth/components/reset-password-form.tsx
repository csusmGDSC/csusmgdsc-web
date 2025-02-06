"use client";

// React Imports
import { useId } from "react";

// UI Components
import { NewPasswordInput } from "@/components/form-inputs/new-password-input";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

// Utils
import { toast } from "sonner";
import { NewPasswordSchema } from "../schemas/auth-schemas";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const id = useId();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    toast.success("Successfully reset password with " + values.password);
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <NewPasswordInput id={id} />

        <Button type="submit" className="w-full">
          Reset Password
        </Button>

        <Link to="/auth/sign-in">
          <Button variant={"link"} className="p-0">
            Back to login
          </Button>
        </Link>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
