import { Link } from "../components/link";
import styled, { useTheme } from "styled-components";
import { FaYoutube, FaTwitch, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { IconType } from "react-icons";

type NavItems = {
  label: string;
  link: string;
  Icon?: IconType;
  newTab?: boolean;
};

const navigationItems: NavItems[] = [
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
  {
    label: "Discord",
    link: "https://discord.gg/An7DjBxWkh",
    Icon: FaDiscord,
    newTab: true,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/@VGC_Gemeinde",
    Icon: FaYoutube,
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/vgc_gemeinde",
    Icon: FaXTwitter,
    newTab: true,
  },
  {
    label: "Twitch",
    link: "https://www.twitch.tv/vgc_gemeinde",
    Icon: FaTwitch,
    newTab: true,
  },
];

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer};
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  align-items: center;
`;

const Navigation: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      {navigationItems.map(({ label, link, Icon, newTab }) => {
        const renderedLabel = Icon ? (
          <Icon color={theme.colors.gallade} title={label} aria-label={label} />
        ) : (
          label
        );
        return (
          <NavigationLink to={link} target={newTab ? "_blank" : undefined}>
            {renderedLabel}
          </NavigationLink>
        );
      })}
    </Container>
  );
};

export { Navigation };
