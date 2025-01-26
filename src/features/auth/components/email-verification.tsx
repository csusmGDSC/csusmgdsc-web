import { Button } from "@/components/ui/button";
import GoogleLoadingBounce from "@/components/ui/google-loading-bounce";
import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mb-8 gap-2 text-emerald-500">
        <GoogleLoadingBounce size="xs" />
      </div>
      <Link to="/auth/sign-in">
        <Button variant={"link"} className="p-0">
          Back to login
        </Button>
      </Link>{" "}
    </div>
  );
};

export default EmailVerification;
