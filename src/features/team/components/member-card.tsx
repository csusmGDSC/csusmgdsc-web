import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MemberCard = ({
  name,
  role,
  imageSrc,
  userId,
}: {
  name: string;
  role: string;
  imageSrc: string;
  userId: string;
}) => {
  return (
    <Card className="flex flex-col items-center justify-center border-transparent shadow-none hover:border-border">
      <img
        src={imageSrc}
        alt="avatar"
        className="rounded-full w-24 h-24 my-10"
      />

      <CardContent className="flex flex-col items-center">
        <p className="text-primary font-medium line-clamp-2">{name}</p>
        <p className="text-primary text-sm">{role}</p>

        <Link to={`/profile/${userId}`} className="mt-3">
          <Button variant="ghost">View Profile</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
