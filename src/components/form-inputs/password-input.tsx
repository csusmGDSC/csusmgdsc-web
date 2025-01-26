import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const PasswordInput = ({
  showForgotPassword,
  initiallyShowPassword = false,
  label = "Password",
  name = "password",
  placeholder = "Enter your password",
  id,
}: {
  showForgotPassword?: boolean;
  initiallyShowPassword?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  id: string;
}) => {
  const [showPassword, setShowPassword] = useState(initiallyShowPassword);
  const form = useFormContext();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex justify-between gap-2">
            {label}
            {showForgotPassword && (
              <Link
                to="/auth/forgot-password"
                className="text-xs font-normal text-muted-foreground hover:underline"
              >
                Forgot Password?
              </Link>
            )}
          </FormLabel>
          <div className="space-y-2">
            <div className="relative">
              <FormControl>
                <Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                  placeholder={placeholder}
                  aria-invalid={!!form.formState.errors.password}
                  aria-describedby={`${id}-description`}
                />
              </FormControl>
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
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
  );
};
