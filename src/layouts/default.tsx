import { PropsWithChildren } from "react";
import { Header } from "../sections/header";
import styled from "styled-components";
import { Footer } from "../sections/footer";

const Container = styled.div`
  font-family: Roboto;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.text.dark};
`;

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export { DefaultLayout };
