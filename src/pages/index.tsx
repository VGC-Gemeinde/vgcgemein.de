import type { HeadFC, PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";
import { Seperator } from "../components/seperator";
import regH from "../images/reg-h.jpeg";
import epTeiler from "../images/ep-teiler.jpeg";
import worlds from "../images/worlds.jpeg";
import { News, NewsSection } from "../vgcGemeinde/news/newsSection";
import { WelcomeSection } from "../vgcGemeinde/welcome/welcomeSection";
import { Guide, GuidesSection } from "../vgcGemeinde/guides/guidesSection";

const news: News[] = [
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

const guides: Guide[] = [
  {
    headLine: "EV Training",
    description: "EVs sind unfassbar kompliziert. Es ist jedoch wichtig sich mehr Mühe zu geben und nicht nur 252/252 auf jedes Mon zu klatschen. Hier lernst du wie du die richtigen Entscheidungen triffst.",
    timeToRead: "15 Min."
  },
  {
    headLine: "Das Type Chart",
    description: "Die Wechselwirkungen in Pokemon können einen schon ganz schön verwirren. Warum zur Hölle ist Käfer gegen Fee nicht sehr effektiv? Lerne es einfach auswendig und du wirst nie wieder überrascht sein.",
    timeToRead: "3 Min."
  },
  {
    headLine: "Genug Übung",
    description: "Noch nie ist ein Meister vom Himmel gefallen. In diesem Artikel erklärt euch Giottas von Limitless, warum es so wichtig ist genug Spiele mit eurem Team zu absolvieren. Online-Tuniere sind ein wahres Mittel zum Erfolg.",
    timeToRead: "5 Min."
  },
]


const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
      <Seperator direction="FILLED_TO_UNFILLED" />
      <NewsSection news={ news } />
      <Seperator direction="UNFILLED_TO_FILLED" />
      <GuidesSection guides={ guides } />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;
