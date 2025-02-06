import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email("Invalid email address").min(2).max(200),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(25, "Password must be less than 25 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address").min(2).max(200),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be less than 25 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
});
