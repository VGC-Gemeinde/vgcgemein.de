import type { HeadFC, PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";
import styled from "styled-components";
import { Link } from "../components/link";
import { CommunityEmblem } from "../branding/communityEmblem";
import { Seperator } from "../components/seperator";
import { theme } from "../theme";
import { NewsCard } from "../branding/newsCard";
import regH from "../images/reg-h.jpeg";
import epTeiler from "../images/ep-teiler.jpeg";
import worlds from "../images/worlds.jpeg";
import { useBreakPoints } from "../hooks/useBreakpoints";

type VarialbeLayout = {
  $padding?: string;
  $direction?: "row" | "column";
};

const WelcomeSection = styled.div<VarialbeLayout>`
  background-color: ${({ theme }) => theme.colors.gallade};
  padding: ${({ theme, $padding }) =>
    $padding ?? theme.spacing.containerPadding.gigantic};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
`;

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;

  color: ${({ theme }) => theme.colors.text.bright};
  & > * {
    padding-top: ${({ theme }) => theme.spacing.verticalBuffer.normal};
    padding-bottom: ${({ theme }) => theme.spacing.verticalBuffer.normal};
  }
`;

const TeaserTextHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.gigantic};
  font-weight: bold;
`;

const TeaserCallToAction = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text.bright};
  text-decoration: underline;
`;

const EmblemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emblem = styled(CommunityEmblem)`
  height: 250px;
`;

const NewsSection = styled.div<VarialbeLayout>`
  padding: ${({ theme, $padding }) =>
    $padding ?? theme.spacing.containerPadding.gigantic};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  & > * {
    padding-top: ${({ theme }) => theme.spacing.verticalBuffer.normal};
    padding-bottom: ${({ theme }) => theme.spacing.verticalBuffer.normal};
  }
`;

const NewsSectionHeading = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.gigantic};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gallade};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 1400px;
  width: 100%;
`;

const NewsCards = styled.div<VarialbeLayout>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.verticalBuffer.large};
  & > * {
    padding-top: ${({ theme }) => theme.spacing.verticalBuffer.normal};
    padding-bottom: ${({ theme }) => theme.spacing.verticalBuffer.normal};
  }
`;

type NewsItem = {
  headLine: string;
  date: string;
  description: string;
  imageSrc: string;
};

const newsItems: NewsItem[] = [
  {
    headLine: "EP-Teiler Episode 1",
    date: "13. August 2024",
    description:
      "In der ersten Folge des EP-Teiler Podcasts beantworten die Admins @TanobaumVGC & @TractieVGC die Fragen der Community.",
    imageSrc: epTeiler,
  },
  {
    headLine: "Übungsturnier #9",
    date: "16. August 2024",
    description:
      "Du suchst ein Trainingsturnier für Regulation H? Dann haben wir etwas für dich!",
    imageSrc: regH,
  },
  {
    headLine: "Worlds Invites der Gemeinde",
    date: "12. August 2024",
    description:
      "Es sind 26 VGC Gemeinde Mitglieder, die sich für die Weltmeisterschaft qualifiziert haben 🔥💪🏻",
    imageSrc: worlds,
  },
];

const ToAllNews = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-decoration: underline;
`;

const IndexPage: React.FC<PageProps> = () => {
  const { isTiny, isLarge } = useBreakPoints();

  return (
    <DefaultLayout>
      <WelcomeSection
        $padding={
          isTiny
            ? theme.spacing.containerPadding.large
            : theme.spacing.containerPadding.gigantic
        }
      >
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
          {!isTiny && (
            <EmblemContainer>
              <Emblem />
            </EmblemContainer>
          )}
        </InnerWelcomeSection>
      </WelcomeSection>
      <Seperator direction="FILLED_TO_UNFILLED" />
      <NewsSection
        $padding={
          isTiny
            ? theme.spacing.containerPadding.large
            : theme.spacing.containerPadding.gigantic
        }
      >
        <NewsSectionHeading>News</NewsSectionHeading>
        <NewsCards $direction={!isLarge ? "column" : "row"}>
          {newsItems
            .slice(0, 3)
            .map(({ headLine, date, description, imageSrc }, index) => (
              <NewsCard
                key={headLine}
                headLine={headLine}
                date={date}
                description={description}
                imageSrc={imageSrc}
                seperatorColor={
                  index === 0
                    ? theme.colors.germany.black
                    : index === 1
                    ? theme.colors.germany.red
                    : theme.colors.germany.gold
                }
              />
            ))}
        </NewsCards>
        <ToAllNews>
          <Link to="/news">Alle News anschauen</Link>
        </ToAllNews>
      </NewsSection>
      <Seperator direction="UNFILLED_TO_FILLED" />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;
