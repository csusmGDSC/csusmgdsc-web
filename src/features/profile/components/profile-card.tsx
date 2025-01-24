import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Flag } from "lucide-react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProfileCard = ({
  name,
  role,
  bio,
  imageSrc,
  hideReport,
}: {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  hideReport?: boolean;
}) => {
  return (
    <div>
      <Card className="flex flex-col items-center justify-center">
        <img
          src={imageSrc}
          alt="avatar"
          className="bg-background rounded-full w-24 h-24 -mb-6 -translate-y-12 border border-border"
        />

        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-primary text-3xl font-medium">{name}</p>
          <p className="text-primary text-lg">{role}</p>

          <Button variant="outline" className="rounded-full text-xs !h-8">
            g.dev/rendybjunior <Copy />
          </Button>
        </CardContent>

        <div className="w-full h-[1px] bg-border mb-4" />

        <CardContent className="flex flex-col w-full gap-4">
          {bio && (
            <>
              <p className="font-medium text-primary">Bio</p>
              <p className="text-primary/80">{bio}</p>
            </>
          )}

          <p className="font-medium text-primary">Links</p>
          <div className="flex flex-col gap-3 text-primary/80">
            <span className="flex items-center gap-2">
              <FaGithub className="w-6 h-6" /> github.com/randybjunior
            </span>
            <span className="flex items-center gap-2">
              <FaLinkedin className="w-6 h-6" /> linkedin.com/in/randybjunior
            </span>
            <span className="flex items-center gap-2">
              <FaStackOverflow className="w-6 h-6" />{" "}
              stackoverflow.com/users/3705319
            </span>
          </div>
        </CardContent>
      </Card>

      {!hideReport && (
        <Link to="/">
          <Button variant="nav" className="mt-1 text-sm mx-0 my-0 p-0">
            <Flag className="w-4 h-4" /> Report profile
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
