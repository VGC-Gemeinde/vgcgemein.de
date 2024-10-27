import { graphql, type HeadFC, type PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";
import { Seperator } from "../components/seperator";
import { News, NewsSection } from "../vgcGemeinde/news/newsSection";
import { WelcomeSection } from "../vgcGemeinde/welcome/welcomeSection";
import { Guide, GuidesSection } from "../vgcGemeinde/guides/guidesSection";
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from "gatsby-source-contentful/rich-text"
import { NewsCardRenderTextOptions } from "../gatsbyRichTextOptions";

type ApiNews = Omit<News, "content"> & {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

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


const IndexPage: React.FC<PageProps<{ allContentfulNews: { nodes: ApiNews[] } }>> = ({ data }) => {
  console.log({ data })

  return (
    <DefaultLayout>
      <WelcomeSection />
      <Seperator direction="FILLED_TO_UNFILLED" />
      <NewsSection news={ data.allContentfulNews.nodes.map((news) => ({ ...news, content: renderRichText(news.content, NewsCardRenderTextOptions) })) } />
      <Seperator direction="UNFILLED_TO_FILLED" />
      <GuidesSection guides={ guides } />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;

export const assetQuery = graphql`
  query NewsQuery {
    allContentfulNews(sort: { publishedDate: DESC } limit: 4 filter: { showOnFeed: { eq: true }}) {
      nodes {
        headLine
        publishedDate
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              gatsbyImageData
              description
            }
          }
        }
        teaserImage { 
          url
          description
        }
      }
    }
  } 
`