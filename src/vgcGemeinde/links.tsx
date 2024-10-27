import { IconType } from "react-icons";
import { FaDiscord, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Icon } from "../components/icon";
import { Link, LinksProps } from "../components/link";
import { ReactElement } from "react";

type NavigationItem = {
  label: string;
  link: string;
  icon?: IconType;
  newTab?: boolean;
};

const pages: NavigationItem[] = [
  {
    label: "News",
    link: "/news",
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Guides",
    link: "/guides",
  },
  {
    label: "FAQ",
    link: "/faq",
  },
  {
    label: "Liga",
    link: "/buli",
  },
  {
    label: "Shop",
    link: "/shop",
  },
];

const socials: NavigationItem[] = [
  {
    label: "Discord",
    link: "https://discord.gg/An7DjBxWkh",
    icon: FaDiscord,
    newTab: true,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/@VGC_Gemeinde",
    icon: FaYoutube,
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/vgc_gemeinde",
    icon: FaXTwitter,
    newTab: true,
  },
  {
    label: "Twitch",
    link: "https://www.twitch.tv/vgc_gemeinde",
    icon: FaTwitch,
    newTab: true,
  },
];

type NavigationItemToLinkOptions = {
  Component: React.FC<LinksProps>;
};

const navigationItemToLink =
  (
    options: NavigationItemToLinkOptions = {
      Component: Link,
    }
  ) =>
  ({ label, link, icon, newTab }: NavigationItem): ReactElement<LinksProps, any> => {
    const renderedLabel = icon ? <Icon label={label} icon={icon} /> : label;
    return (
      <options.Component to={link} target={newTab ? "_blank" : undefined}>
        {renderedLabel}
      </options.Component>
    );
  };

export { pages, socials, navigationItemToLink };
export type { NavigationItem };
