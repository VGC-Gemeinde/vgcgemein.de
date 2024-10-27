import styled from "styled-components";
import { navigationItemToLink, pages, socials } from "../../vgcGemeinde/links";
import { Link } from "../../components/link";

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.font.normal};
  font-weight: bold;
`;

const NavigationItem = styled.div`
  margin-right: ${({ theme }) => theme.spacing.buffer.normal};
`;

const navigationItems = [...pages, ...socials];

const DesktopNavigation: React.FC = () => {
  return (
    <Navigation>
      {navigationItems
        .map(navigationItemToLink({ Component: NavigationLink }))
        .map((link) => (
          <NavigationItem key={link.props.to}>{link}</NavigationItem>
        ))}
    </Navigation>
  );
};

export { DesktopNavigation };
