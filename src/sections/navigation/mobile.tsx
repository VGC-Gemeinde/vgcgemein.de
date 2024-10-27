import { useCallback, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import styled, { useTheme } from "styled-components";
import { navigationItemToLink, pages, socials } from "../../vgcGemeinde/links";
import { useHeaderSize } from "../../hooks/useHeaderSize";
import { theme } from "../../theme";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
const Popover = styled.div<{ $headerSize: number }>`
  position: absolute;
  left: 0;
  top: ${({ $headerSize }) => $headerSize}px;
  z-index 1;
  height: calc(100% - ${({ $headerSize }) => $headerSize}px);
  width: 100%;

  background-color: white;
  opacity: 90%;

  display: flex;
  flex-direction: column;
`;

const NavigationItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing.padding.normal};
  gap: ${({ theme }) => theme.spacing.buffer.normal};
`;

const NavigationItemPage = styled(NavigationItem)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gallade};
`;


const MobileNavigation: React.FC = () => {
  const theme = useTheme();
  const headerSize = useHeaderSize();
  const [isOpen, setIsOpen] = useState(false);

  const closeNavigation = useCallback(() => setIsOpen(false), []);
  const openNavigation = useCallback(() => setIsOpen(true), []);

  return (
    <Navigation>
      {isOpen ? (
        <FaX
          size={theme.sizes.header.menu}
          title="Navigation schließen"
          aria-label="Navigation schließen"
          color={theme.colors.gallade}
          onClick={closeNavigation}
        />
      ) : (
        <FaBars
          size={theme.sizes.header.menu}
          title="Navigation öffnen"
          aria-label="Navigation öffnen"
          color={theme.colors.gallade}
          onClick={openNavigation}
        />
      )}
      {isOpen && (
        <Popover $headerSize={headerSize}>
          {pages.map(navigationItemToLink()).map((link) => (
            <NavigationItemPage>{link}</NavigationItemPage>
          ))}
          <NavigationItem>{socials.map(navigationItemToLink())}</NavigationItem>
        </Popover>
      )}
    </Navigation>
  );
};

export { MobileNavigation };
