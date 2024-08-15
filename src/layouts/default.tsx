import { PropsWithChildren } from "react";
import { Header } from "../sections/header";
import styled from "styled-components";

const Container = styled.div`
  font-family: Roboto;
  font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export { DefaultLayout };
