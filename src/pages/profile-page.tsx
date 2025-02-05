import { useUserById } from "@/api/user-api";
import { PageContent } from "@/features/base";
import { ProfileCard } from "@/features/profile";
import { Navigate, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const pathname = useLocation().pathname;
  const id = pathname.split("/").pop();

  if (!id) {
    return <Navigate to="/not-found" />;
  }

  const { data: user } = useUserById(id);

  return (
    <section>
      <PageContent>
        <div className="w-full flex justify-center items-center mt-20">
          <div className="w-[350px] items-center justify-center">
            <ProfileCard
              name={user?.full_name || "No Name"}
              role={(user?.position as any) || "No Role"}
              bio={user?.bio}
              linkedin={user?.linkedin}
              discord={user?.discord}
              github={user?.github}
              instagram={user?.instagram}
              website={user?.website}
              tags={user?.tags}
              userId={user?.id}
              imageSrc="https://avatar.iran.liara.run/public"
            />
          </div>
        </div>
      </PageContent>
    </section>
  );
};

export default ProfilePage;
