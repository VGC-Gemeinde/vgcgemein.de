import styled from "styled-components";
import { Link } from "../../components/link";
import { VgcGemeindeEmblem } from "../branding/emblem";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gallade};
  padding: ${({ theme }) => theme.spacing.padding.gigantic};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes.maxContentWidth};
  width: 100%;
`;

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;

  color: ${({ theme }) => theme.colors.text.bright};
  & > * {
    padding-top: ${({ theme }) => theme.spacing.buffer.normal};
    padding-bottom: ${({ theme }) => theme.spacing.buffer.normal};
  }
`;

const TeaserTextHeading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.font.gigantic};
  font-weight: bold;
`;

const TeaserCallToAction = styled(Link)`
  font-size: ${({ theme }) => theme.sizes.font.large};
  color: ${({ theme }) => theme.colors.text.bright};
  text-decoration: underline;
`;

const EmblemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emblem = styled(VgcGemeindeEmblem)`
  height: 250px;
`;

export const WelcomeSection: React.FC = () => {
    return (
        <Container>
            <InnerWelcomeSection>
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
            </InnerWelcomeSection>
        </Container>
    )
}