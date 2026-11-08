import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 pt-16 pb-20 sm:px-8 sm:pt-24">
      <div className="flex w-full max-w-[26rem] flex-col items-center">
        <ProfileHeader profile={profile} />
        <ul className="mt-12 flex w-full flex-col gap-4 sm:gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
