import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-neutral-800"
      />
      <h1 className="mt-6 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
