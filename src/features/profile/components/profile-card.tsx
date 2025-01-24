import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RandomBadge from "@/components/ui/random-badge";
import { Tag } from "emblor";
import { Copy, Flag } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProfileCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  hideReport?: boolean;
  userId?: string;
  discord?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  tags?: Tag[];
  className?: string;
}

const ProfileCard = ({
  name,
  userId,
  discord,
  github,
  linkedin,
  instagram,
  website,
  role,
  bio,
  imageSrc,
  hideReport,
  tags,
  className,
}: ProfileCardProps) => {
  return (
    <div className={className}>
      <Card className="flex flex-col items-center justify-center">
        <img
          src={imageSrc}
          alt="avatar"
          className="bg-background rounded-full w-24 h-24 -mb-6 -translate-y-12 border border-border"
        />

        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-primary text-3xl font-medium">{name}</p>
          <p className="text-primary text-lg">{role}</p>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="relative rounded-full text-xs !h-8 w-1/2"
                >
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap w-full block">
                    g.profile/{userId}
                  </span>
                  <Copy />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-primary text-xs font-medium rounded-sm">
                Copy profile link
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>

        <div className="w-full h-[1px] bg-border mb-4" />

        <CardContent className="flex flex-col w-full gap-4">
          {bio && (
            <>
              <p className="font-medium text-primary">Bio</p>
              <p className="text-primary/80">{bio}</p>
            </>
          )}

          {(discord || github || linkedin || instagram || website) && (
            <>
              <p className="font-medium text-primary">Links</p>
              <div className="flex flex-col gap-1 text-primary/80">
                {github && (
                  <Link to={github} target="_blank">
                    <Button
                      variant="link"
                      className="p-0 h-fit text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap w-full justify-start"
                    >
                      <FaGithub className="w-6 h-6" /> {github}
                    </Button>
                  </Link>
                )}
                {linkedin && (
                  <Link to={linkedin} target="_blank">
                    <Button
                      variant="link"
                      className="p-0 h-fit text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap w-full justify-start"
                    >
                      <FaLinkedin className="w-6 h-6" /> {linkedin}
                      fsf s
                    </Button>
                  </Link>
                )}
                {instagram && (
                  <Link to={instagram} target="_blank">
                    <Button
                      variant="link"
                      className="p-0 h-fit text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap w-full justify-start"
                    >
                      <FaInstagram className="w-6 h-6" /> {instagram}
                    </Button>
                  </Link>
                )}
                {website && (
                  <Link to={website} target="_blank">
                    <Button
                      variant="link"
                      className="p-0 h-fit hover:bg-background text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap w-full justify-start"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" /> {website}
                    </Button>
                  </Link>
                )}
                {discord && (
                  <Button
                    variant="ghost"
                    className="p-0 h-fit text-sm font-normal w-fit overflow-hidden text-ellipsis whitespace-nowrap w-full justify-start"
                  >
                    <FaDiscord className="w-6 h-6" /> {discord}
                  </Button>
                )}
              </div>
            </>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-col gap-4">
              <p className="font-medium text-primary">Tags</p>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <RandomBadge
                    key={index}
                    text={tag.text}
                    className="text-sm font-medium rounded-sm px-3"
                  />
                ))}
              </div>
            </div>
          )}
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
