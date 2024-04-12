import ProfileCard from "@/components/ProfileCard";
import SocialMediaFeed from "@/components/SocialMediaFeed";

export default function Home() {
  return (
    <main>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ">
          <div className="col-span-5 lg:col-span-2 lg:p-12 xl:px-32 md:p-8 p-4">
            <ProfileCard />
          </div>
          <div className="col-span-5 lg:col-span-3  md:max-h-screen md:overflow-y-scroll lg:p-12 xl:px-32 md:p-8 p-4">
            <SocialMediaFeed />
          </div>
        </div>
      </div>
    </main>
  );
}
