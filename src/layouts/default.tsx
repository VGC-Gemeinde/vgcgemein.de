import { PropsWithChildren } from "react";
import { Header } from "../sections/header";
import styled from "styled-components";
import { Footer } from "../sections/footer";

const Container = styled.div`
  font-family: Roboto;
  font-size: ${({ theme }) => theme.sizes.font.normal};
  color: ${({ theme }) => theme.colors.text.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export { DefaultLayout };
