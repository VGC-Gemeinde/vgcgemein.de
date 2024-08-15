import type { HeadFC, PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";
import styled from "styled-components";
import { Link } from "../components/link";
import { Emblem } from "../branding/emblem";

const WelcomeSection = styled.div`
  background-color: ${({ theme }) => theme.colors.gallade};
  padding: ${({ theme }) => theme.spacing.containerPadding.large};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  color: ${({ theme }) => theme.colors.text.bright};
  & > * {
    padding-top: ${({ theme }) => theme.spacing.verticalBuffer};
    padding-bottom: ${({ theme }) => theme.spacing.verticalBuffer};
  }
`;

const TeaserTextHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.gigantic};
`;

const TeaserCallToAction = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text.bright};
  text-decoration: underline;
`;

const EmblemContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WelcomeSection>
        <TeaserText>
          <TeaserTextHeading>VGC Gemeinde</TeaserTextHeading>
          <p>
            In der größten deutschsprachigen VGC Community erwarten dich
            spannende Tuniere, lehrreiche Trainingssessions, eine hoch
            kompetitive Liga und vor allem die nicesten Mitglieder.
          </p>
          <TeaserCallToAction to="discord" target="_blank">
            Trete dem Discord bei!
          </TeaserCallToAction>
        </TeaserText>
        <EmblemContainer>
          <Emblem />
        </EmblemContainer>
      </WelcomeSection>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;
