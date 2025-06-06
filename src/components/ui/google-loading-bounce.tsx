import { cn } from "@/lib/utils";

const sizes = {
  xs: "w-[0.6rem] h-[0.6rem] m-[0.1rem]",
  sm: "w-[1rem] h-[1rem] m-[0.2rem]",
  md: "w-[1.4rem] h-[1.4rem] m-[0.4rem]",
  lg: "w-[3.2rem] h-[3.2rem] m-[0.8rem]",
};

const GoogleLoadingBounce = ({
  size = "sm",
}: {
  size?: keyof typeof sizes;
}) => {
  return (
    <div className="flex items-end">
      <div
        className={cn(
          sizes[size],
          "rounded-full bg-blue animate-[loader-bounce_1.4s_infinite_ease-in-out]"
        )}
      ></div>
      <div
        className={cn(
          sizes[size],
          "rounded-full bg-red animate-[loader-bounce_1.4s_infinite_ease-in-out] [animation-delay:0.2s]"
        )}
      ></div>
      <div
        className={cn(
          sizes[size],
          "rounded-full bg-yellow animate-[loader-bounce_1.4s_infinite_ease-in-out] [animation-delay:0.4s]"
        )}
      ></div>
      <div
        className={cn(
          sizes[size],
          "rounded-full bg-green animate-[loader-bounce_1.4s_infinite_ease-in-out] [animation-delay:0.6s]"
        )}
      ></div>
    </div>
  );
};

export default GoogleLoadingBounce;
