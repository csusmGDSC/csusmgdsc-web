"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";

interface ResetFormProps {
  handleBackRef?: "";
}

const ResetSchema = z.object({
  email: z.string().email("Invalid email address").min(2).max(200),
});

const ResetForm: React.FC<ResetFormProps> = () => {
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-8">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <SimpleFormInput
              name="email"
              id="email"
              label="Email"
              required
              placeholder="Enter your email"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#4189e8] hover:bg-[#4189e8]/70"
          >
            Send reset email
          </Button>
        </form>
      </Form>

      <Link to="/auth/sign-in">
        <Button variant={"link"} className="p-0">
          Back to login
        </Button>
      </Link>
    </div>
  );
};

export default ResetForm;
