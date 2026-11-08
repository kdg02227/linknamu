import type { LinkType, ProfileLink } from "@/data/profile";

function LinkIcon({ type }: { type: LinkType }) {
  const common = "h-5 w-5 shrink-0";
  switch (type) {
    case "github":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      );
    case "blog":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      );
  }
}

export default function LinkCard({ link }: { link: ProfileLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-5 py-[1.125rem] text-[0.9375rem] font-semibold text-stone-800 shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_8px_24px_-12px_rgb(150_80_40/0.25)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:bg-white/65 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),0_12px_28px_-12px_rgb(150_80_40/0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:scale-[0.99] motion-safe:hover:-translate-y-px dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)] dark:hover:bg-white/10"
    >
      <LinkIcon type={link.type} />
      <span className="flex-1 text-center">{link.title}</span>
      {/* 아이콘과 균형을 맞추기 위한 빈 공간 */}
      <span className="h-5 w-5 shrink-0" aria-hidden="true" />
    </a>
  );
}
