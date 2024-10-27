import styled from "styled-components";
import { Link } from "../../components/link";
import { VgcGemeindeEmblem } from "../branding/emblem";
import { useScreenSize } from "../../hooks/useScreenSize";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gallade};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLarge = styled(Container)`
  padding: ${({ theme }) => theme.spacing.padding.gigantic};
`;

const ContainerTiny = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing.padding.large};
  padding-bottom: ${({ theme }) => theme.spacing.padding.large};
  padding-left: ${({ theme }) => theme.spacing.padding.small};
  padding-right: ${({ theme }) => theme.spacing.padding.small};
`;

const InnerWelcomeSection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.sizes.maxContentWidth};
  width: 100%;
  align-items: center;
`;

const InnerWelcomeSectionLarge = styled(InnerWelcomeSection)`
  justify-content: space-between;
`

const InnerWelcomeSectionTiny = styled(InnerWelcomeSection)`
  justify-content: center;
`

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
    const { upTo, downTo } = useScreenSize();

    const ContainerC = upTo("tiny") ? ContainerTiny : ContainerLarge;
    const InnerWelcomeSectionC = upTo("tiny") ? InnerWelcomeSectionTiny : InnerWelcomeSectionLarge;

    return (
        <ContainerC>
            <InnerWelcomeSectionC>
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
              { downTo("small") && (
                <EmblemContainer>
                  <Emblem />
                </EmblemContainer>
              )}
            </InnerWelcomeSectionC>
        </ContainerC>
    )
}