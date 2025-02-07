import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NewPasswordInput = ({ id }: { id: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useFormContext();

  const checkMatchingPassword = (password: string, confirmPassword: string) => {
    if (password === "" || confirmPassword === "") return false;
    return password === confirmPassword;
  };

  const passwordMatched = checkMatchingPassword(
    form.watch("password"),
    form.watch("confirmPassword")
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  return (
    <>
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
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                      <X size={16} className="text-muted-foreground/80" />
                    )}
                    <span
                      className={`text-xs ${
                        req.met ? "text-emerald-600" : "text-muted-foreground"
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

      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <div
                className={cn(
                  "flex items-center gap-2",
                  passwordMatched ? "text-[#22c55e]" : ""
                )}
              >
                {passwordMatched ? "Password matches" : "Confirm password"}
                {passwordMatched ? <Check size={16} /> : null}
              </div>
            </FormLabel>
            <div className="space-y-2">
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                    placeholder="Confirm password"
                    aria-invalid={
                      form.formState.errors.confirmPassword ? true : false
                    }
                    aria-describedby={`${id}-description`}
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={toggleShowConfirmPassword}
                  className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm-password"
                      : "Show confirm-password"
                  }
                >
                  {showConfirmPassword ? (
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
    </>
  );
};
