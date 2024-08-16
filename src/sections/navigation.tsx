import { Link } from "../components/link";
import styled, { useTheme } from "styled-components";
import {
  FaYoutube,
  FaTwitch,
  FaXTwitter,
  FaDiscord,
  FaBars,
  FaX,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { useBreakPoints } from "../hooks/useBreakpoints";
import { useState } from "react";

type NavigationItem = {
  label: string;
  link: string;
  Icon?: IconType;
  newTab?: boolean;
};

const links: NavigationItem[] = [
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

const navigationItems: NavigationItem[] = [...links, ...socials];

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  margin-right: ${({ theme }) => theme.spacing.horizontalBuffer.normal};
  font-size: ${({ theme }) => theme.fontSizes.large};
  display: flex;
  align-items: center;
`;

const MobileNavigationLinkContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.containerPadding.small};
  width: 100%;
  text-align: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
`;

const MobileNavigationLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.gigantic};
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.horizontalBuffer.small};
  padding-right: ${({ theme }) => theme.spacing.horizontalBuffer.small};
`;

const MobileNavigationPopover = styled.div`
  position: absolute;
  top: 89px;
  left: 0px;
  height: calc(100% - 89px);
  width: 100%;
  background-color: white;
  z-index: 1;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation: React.FC = () => {
  const theme = useTheme();
  const { isLarge } = useBreakPoints();

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  if (!isLarge) {
    return (
      <Container>
        {isNavigationOpen ? (
          <FaX
            size={50}
            title="Navigation schließen"
            aria-label="Navigation schließen"
            color={theme.colors.gallade}
            onClick={() => setIsNavigationOpen(false)}
          />
        ) : (
          <FaBars
            size={50}
            title="Navigation öffnen"
            aria-label="Navigation öffnen"
            color={theme.colors.gallade}
            onClick={() => setIsNavigationOpen(true)}
          />
        )}
        {isNavigationOpen && (
          <MobileNavigationPopover>
            {links.map(({ label, link, Icon, newTab }) => {
              const renderedLabel = Icon ? (
                <Icon
                  color={theme.colors.gallade}
                  title={label}
                  aria-label={label}
                />
              ) : (
                label
              );
              return (
                <MobileNavigationLinkContainer>
                  <MobileNavigationLink
                    to={link}
                    target={newTab ? "_blank" : undefined}
                  >
                    {renderedLabel}
                  </MobileNavigationLink>
                </MobileNavigationLinkContainer>
              );
            })}
            <MobileNavigationLinkContainer>
              {socials.map(({ label, link, Icon, newTab }) => {
                const renderedLabel = Icon ? (
                  <Icon
                    color={theme.colors.gallade}
                    title={label}
                    aria-label={label}
                  />
                ) : (
                  label
                );
                return (
                  <MobileNavigationLink
                    to={link}
                    target={newTab ? "_blank" : undefined}
                  >
                    {renderedLabel}
                  </MobileNavigationLink>
                );
              })}
            </MobileNavigationLinkContainer>
          </MobileNavigationPopover>
        )}
      </Container>
    );
  }

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
