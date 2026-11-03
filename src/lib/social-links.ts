export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/christjuvalin.lessengui",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christ-juvalin-lessengui-aa4843299",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/LESSENGUI_C_J",
    icon: "x",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/2VWPINXB6L34A1",
    icon: "whatsapp",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@christjuvalin1",
    icon: "tiktok",
  },
] as const;

export type SocialIconName = (typeof socialLinks)[number]["icon"];
