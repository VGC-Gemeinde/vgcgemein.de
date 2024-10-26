import { Link } from "gatsby";
import styled from "styled-components";
import { NewsCard } from "./newsCard";

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.buffer.large};
  & > * {
    margin-top: ${({ theme }) => theme.spacing.buffer.large};
    margin-bottom: ${({ theme }) => theme.spacing.buffer.large};
  }
`;

export type News = {
  headLine: string;
  date: string;
  description: string;
  imageSrc: string;
};

export type NewsSectionProps = {
    news: News[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
    return <Container>
        <Content>
            <NewsSectionHeading>News</NewsSectionHeading>
            <NewsCards>
            { news.slice(0, 4)
                .map(({ headLine, date, description, imageSrc }, index) => (
                    <NewsCard
                      key={headLine}
                      headLine={headLine}
                      date={date}
                      description={description}
                      imageSrc={imageSrc}
                    />
                ))
            }
            </NewsCards>
            <ToAllNews to="/news">Alle News anschauen</ToAllNews>
        </Content>
    </Container>

}