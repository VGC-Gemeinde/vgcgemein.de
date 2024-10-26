import type { HeadFC, PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";
import { Seperator } from "../components/seperator";
import regH from "../images/reg-h.jpeg";
import epTeiler from "../images/ep-teiler.jpeg";
import worlds from "../images/worlds.jpeg";
import { News, NewsSection } from "../vgcGemeinde/news/newsSection";
import { WelcomeSection } from "../vgcGemeinde/welcome/welcomeSection";

const newsItems: News[] = [
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
  {
    headLine: "Worlds Invites der Gemeinde 2",
    date: "12. August 2024",
    description:
      "Es sind 26 VGC Gemeinde Mitglieder, die sich für die Weltmeisterschaft qualifiziert haben 🔥💪🏻",
    imageSrc: worlds,
  },
];


const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
      <Seperator direction="FILLED_TO_UNFILLED" />
      <NewsSection news={ newsItems } />
      <Seperator direction="UNFILLED_TO_FILLED" />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;
