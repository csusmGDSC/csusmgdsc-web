import { Button } from "@/components/ui/button";
import { OTPInput, SlotProps } from "input-otp";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

const TwoFactorAuthForm = () => {
  const id = useId();

  return (
    <div className="flex flex-col gap-8 items-center">
      <Label htmlFor={id} className="font-normal text-primary text-center">
        Protecting your school acount is our top priority. Please confirm your
        account by entering the authorization code sent to{" "}
        <span className="font-bold">ja...n@outlook.com</span>
      </Label>
      <OTPInput
        id={id}
        containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
        maxLength={7}
        render={({ slots }) => (
          <>
            <div className="flex">
              {slots.slice(0, 4).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>

            <div className="text-muted-foreground/80">
              <Minus size={16} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          </>
        )}
      />

      <Button className="w-full">Submit</Button>

      <div className="text-sm w-full flex flex-col items-center">
        <p>It may take a minute to recieve your code.</p>
        <span className="flex gap-2">
          <p>Haven't recieved it?</p>{" "}
          <Button variant={"link"} className="p-0 h-fit font-light">
            Resend a new code
          </Button>
        </span>
      </div>
    </div>
  );
};

export default TwoFactorAuthForm;

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative -ms-px flex size-12 items-center justify-center border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow first:ms-0 first:rounded-s-lg last:rounded-e-lg",
        { "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
