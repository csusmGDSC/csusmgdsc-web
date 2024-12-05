import { PageContent } from "@/features/base";
import { ProfileCard } from "@/features/profile";

const ProfilePage = () => {
  return (
    <section>
      <PageContent>
        <div className="w-full flex justify-center items-center mt-20">
          <div className="w-[350px] items-center justify-center">
            <ProfileCard
              name="Jaedon Spurlock"
              role="Technical Lead"
              imageSrc="https://avatar.iran.liara.run/public"
            />
          </div>
        </div>
      </PageContent>
    </section>
  );
};

export default ProfilePage;
