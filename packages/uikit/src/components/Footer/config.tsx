import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://c4ei.net",
      },
      // {
      //   label: "Blog",
      //   href: "https://medium.com/pancakeswap",
      // },
      // {
      //   label: "Community",
      //   href: "https://docs.swap.c4ei.net/contact-us/telegram",
      // },
      // {
      //   label: "CAKE",
      //   href: "https://docs.swap.c4ei.net/tokenomics/cake",
      // },
      // {
      //   label: "—",
      // },
      // {
      //   label: "Online Store",
      //   href: "https://pancakeswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: "Help",
    items: [
      // {
      //   label: "Customer",
      //   href: "Support https://docs.swap.c4ei.net/contact-us/customer-support",
      // },
      // {
      //   label: "Troubleshooting",
      //   href: "https://docs.swap.c4ei.net/help/troubleshooting",
      // },
      {
        label: "Guides",
        href: "https://docs.google.com/document/d/1qT76SW6ft_nKA7guj16Ty_veOo-s2vI_0KNB2OP3ugc/edit?usp=sharing",
      },
      {
        label: "use C4EI",
        href: "https://swap.c4ei.net/add?chainId=21004",
      },
      {
        label: "MyLP (C4EI)",
        href: "https://swap.c4ei.net/liquidity?chainId=21004",
      },
      {
        label: "use KLAY",
        href: "https://swap.c4ei.net/add?chainId=8217",
      },
      {
        label: "MyLP (KLAY)",
        href: "https://swap.c4ei.net/liquidity?chainId=8217",
      },
      {
        label: "use polygon",
        href: "https://swap.c4ei.net/add?chainId=137",
      },
      {
        label: "MyLP (polygon)",
        href: "https://swap.c4ei.net/liquidity?chainId=137",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/c4ei/pancakeswap",
      },
      // {
      //   label: "Documentation",
      //   href: "https://docs.swap.c4ei.net",
      // },
      // {
      //   label: "Bug Bounty",
      //   href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      // },
      // {
      //   label: "Audits",
      //   href: "https://docs.swap.c4ei.net/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      // {
      //   label: "Careers",
      //   href: "https://docs.swap.c4ei.net/hiring/become-a-chef",
      // },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/c4ei_net",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/c4eiAirdrop",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Deutsch",
      //   href: "https://t.me/PancakeSwap_DE",
      // },
      // {
      //   label: "Filipino",
      //   href: "https://t.me/Pancakeswap_Ph",
      // },
      // {
      //   label: "ქართული ენა",
      //   href: "https://t.me/PancakeSwapGeorgia",
      // },
      // {
      //   label: "हिन्दी",
      //   href: "https://t.me/PancakeSwapINDIA",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      // },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/c4ei/pancakeswap/",
  },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://medium.com/pancakeswap",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
