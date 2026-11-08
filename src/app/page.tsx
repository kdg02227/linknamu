import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-neutral-100 px-4 py-12 dark:bg-neutral-950 sm:py-16">
      <div className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader profile={profile} />
        <ul className="mt-10 flex w-full flex-col gap-4">
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
