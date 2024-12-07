import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ApplyNow() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[300px] bg-blue -mb-20">
      <h1 className="text-white font-medium text-lg md:text-2xl lg:text-3xl">
        Join GDSC CSUSM
      </h1>

      <p className="text-center text-white/80 my-4">
        Become a part of our community of software engineers. No prior
        experience required <br /> just bring your passion and ambition for
        learning.
      </p>

      <Link to="/join">
        <Button className="bg-white hover:bg-white/80 text-blue px-10 rounded-full">
          Sign Up Now
        </Button>
      </Link>
    </div>
  );
}
