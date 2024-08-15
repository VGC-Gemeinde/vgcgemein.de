import styled from "styled-components";
import { Logo } from "../branding/logo";
import { Navigation } from "./navigation";
import { Link } from "../components/link";

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.containerMargin};
  justify-content: space-between;
`;

const FlagBorder = styled.div`
  height: 3px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.germany.black} 0%,
    ${({ theme }) => theme.colors.germany.red} 40%,
    ${({ theme }) => theme.colors.germany.gold} 75%
  );
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </Content>
      <FlagBorder />
    </Container>
  );
};

export { Header };
