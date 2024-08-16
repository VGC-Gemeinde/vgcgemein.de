import styled from "styled-components";
import { Navigation } from "./navigation";
import { Link } from "../components/link";
import { CommunityIcon } from "../branding/communityIcon";

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.containerPadding.small};
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

const Icon = styled(CommunityIcon)`
  height: 50px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
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
