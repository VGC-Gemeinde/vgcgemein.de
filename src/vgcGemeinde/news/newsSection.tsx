import styled from "styled-components";
import { NewsCard } from "./newsCard";
import { ReactNode } from "react";
import { Link } from "../../components/link";
import { useScreenSize } from "../../hooks/useScreenSize";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.padding.gigantic};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.maxContentWidth};
`;

const ContentSmall = styled(Content)`
  align-items: center;
`

const NewsSectionHeading = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.gigantic};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gallade};
`;

const ToAllNews = styled(Link)`
  font-size: ${({ theme }) => theme.sizes.font.large};
  text-decoration: underline;
`;

const NewsCards = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.buffer.large};
  & > * {
    margin: ${({ theme }) => theme.spacing.buffer.large};
  }
`;

const NewsCardsLarge = styled(NewsCards)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NewsCardsSmall = styled(NewsCards)`
  flex-direction: column;
  align-items: center;
`

export type News = {
  headLine: string;
  publishedDate: string;
  content: ReactNode;
  teaserImage: { url: string, description: string };
};


export type NewsSectionProps = {
    news: News[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
    const { upTo } = useScreenSize()

    const ContentC = upTo("small") ? ContentSmall : Content;
    const NewsCardsC = upTo("small") ? NewsCardsSmall : NewsCardsLarge;

    return <Container>
        <ContentC>
            <NewsSectionHeading>News</NewsSectionHeading>
            <NewsCardsC>
            { news
                .map(({ headLine, publishedDate: date, content, teaserImage }, index) => (
                    <NewsCard
                      key={headLine}
                      headLine={headLine}
                      date={date}
                      imageSrc={teaserImage.url}
                    >
                      { content }
                    </NewsCard>
                ))
            }
            </NewsCardsC>
            <ToAllNews to="/news">Alle News anschauen</ToAllNews>
        </ContentC>
    </Container>

}