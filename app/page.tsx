import ProfileCard from "@/components/ProfileCard";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import { socialData } from "@/data/social-data";

export default function Home() {
  return (
    <main>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="col-span-3 lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="col-span-3 lg:col-span-2 max-h-screen lg:overflow-y-scroll">
            <SocialMediaFeed socialCards={socialData} />
          </div>
        </div>
      </div>
    </main>
  );
}
