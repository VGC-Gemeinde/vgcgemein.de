import styled from "styled-components";
import { Navigation } from "./navigation";
import { Link } from "../components/link";
import { VgcGemeindeIcon } from "../vgcGemeinde/branding/icon";
import { useScreenSize } from "../hooks/useScreenSize";
import { theme } from "../theme";

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<{ $padding: string }>`
  display: flex;
  flex-direction: row;
  padding: ${({ $padding }) => $padding};
  justify-content: space-between;
`;

const FlagBorder = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.colors.germany.gradiant(theme)};
`;

const Icon = styled(VgcGemeindeIcon)`
  height: ${({ theme }) => theme.sizes.header.icons}px;
`;

const Header: React.FC = () => {
  const { upTo } = useScreenSize();

  return (
    <Container id="header">
      <Content
        $padding={
          upTo("small")
            ? theme.spacing.padding.small
            : theme.spacing.padding.normal
        }
      >
        <Link to="/">
          <Icon />
        </Link>
        <Navigation />
      </Content>
      <FlagBorder />
    </Container>
  );
};

export { Header };
