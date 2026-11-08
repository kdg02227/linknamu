// 보여주기용 더미 데이터입니다. 실제 내용은 나중에 이 파일만 고치면 됩니다.

export type LinkType = "github" | "linkedin" | "blog";

export type ProfileLink = {
  id: string;
  type: LinkType;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export const profile: Profile = {
  name: "김동규",
  bio: "지상이 룸메",
  imageUrl: "/profile.jpg",
};

export const links: ProfileLink[] = [
  { id: "github", type: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", type: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", type: "blog", title: "Blog", url: "https://example.com/" },
];
