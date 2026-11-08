import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 은은한 그라데이션 테두리 + 따뜻한 그림자로 살짝 떠 보이게 */}
      <div className="rounded-full bg-gradient-to-br from-white via-orange-100 to-rose-200 p-1 shadow-[0_18px_40px_-12px_rgb(180_90_50/0.35),0_4px_12px_-4px_rgb(180_90_50/0.2)] dark:from-stone-600 dark:via-stone-700 dark:to-stone-800 dark:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)]">
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="h-28 w-28 rounded-full object-cover ring-2 ring-white/80 sm:h-32 sm:w-32 dark:ring-white/10"
        />
      </div>
      <h1 className="mt-6 text-[1.625rem] font-bold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-[0.9375rem] text-stone-500 dark:text-stone-400">
        {profile.bio}
      </p>
    </header>
  );
}
