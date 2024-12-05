import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    <Card className="flex flex-col items-center justify-center">
      <img
        src={imageSrc}
        alt="avatar"
        className="rounded-full w-24 h-24 my-10"
      />

      <CardContent className="flex flex-col items-center">
        <p className="text-primary text-lg font-medium">{name}</p>
        <p className="text-primary text-lg">{role}</p>
      </CardContent>

      <CardFooter>
        <Link to={`/profile/${userId}`}>
          <Button variant="ghost">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
