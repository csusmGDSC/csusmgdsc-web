import { Button } from "@/components/ui/button";
import { BiLeftTopArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <Link to="/" className="mb-4">
      <Button variant="link" className="p-0">
        <BiLeftTopArrowCircle /> Back to Home
      </Button>
    </Link>
  );
};
