import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export const OauthButtons = () => {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <hr className="flex-1" />
        <span className="text-sm text-gray-500">or continue with</span>
        <hr className="flex-1" />
      </div>
      <div className="flex justify-center space-x-4">
        <SocialButton icon="google" />
        <SocialButton icon="github" />
      </div>
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
