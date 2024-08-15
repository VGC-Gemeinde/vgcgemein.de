import { Link } from "gatsby";
import styled, { useTheme } from "styled-components";
import { FaYoutube, FaTwitch, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { IconType } from "react-icons";

type NavItems = {
  label: string;
  Icon?: IconType;
  link: string;
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
    Icon: FaDiscord,
    link: "https://discord.gg/An7DjBxWkh",
  },
  {
    label: "Youtube",
    Icon: FaYoutube,
    link: "https://www.youtube.com/@VGC_Gemeinde",
  },
  {
    label: "X",
    Icon: FaXTwitter,
    link: "https://x.com/vgc_gemeinde",
  },
  {
    label: "Twitch",
    Icon: FaTwitch,
    link: "https://www.twitch.tv/vgc_gemeinde",
  },
];

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gallade};
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer};
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-width: ${({ theme }) => theme.accessibility.focussed.outlineWidth};
    outline-color: ${({ theme }) => theme.colors.gallade};
  }
`;

const Navigation: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      {navigationItems.map(({ label, link, Icon }) => {
        const renderedLabel = Icon ? (
          <Icon color={theme.colors.gallade} title={label} aria-label={label} />
        ) : (
          label
        );
        return <NavigationLink to={link}>{renderedLabel}</NavigationLink>;
      })}
    </Container>
  );
};

export { Navigation };
