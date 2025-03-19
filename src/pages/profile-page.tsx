import { useUserById } from "@/api/user-api";
import { PageContent } from "@/features/base";
import { ProfileCard } from "@/features/profile";
import { IOTA_TO_GDSC_POSITION } from "@/types/user";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const id = useMemo(() => location.pathname.split("/").pop(), [location]);

  const { data: user, isLoading } = useUserById(id || "");

  if (!isLoading && !user) {
    return <Navigate to="/team" />;
  }

  return (
    <section>
      <PageContent>
        <div className="w-full flex justify-center items-center mt-20">
          <div className="w-[350px] items-center justify-center">
            {isLoading ? (
              <Loader2 className="animate-spin m-auto" />
            ) : (
              <ProfileCard
                name={user?.full_name || "No Name"}
                role={
                  user?.position
                    ? IOTA_TO_GDSC_POSITION[user.position]
                    : "No Role"
                }
                bio={user?.bio}
                linkedin={user?.linkedin}
                discord={user?.discord}
                github={user?.github}
                instagram={user?.instagram}
                website={user?.website}
                tags={user?.tags}
                userId={user?.id}
                imageSrc={user?.image || "https://avatar.iran.liara.run/public"}
              />
            )}
          </div>
        </div>
      </PageContent>
    </section>
  );
};

export default ProfilePage;
