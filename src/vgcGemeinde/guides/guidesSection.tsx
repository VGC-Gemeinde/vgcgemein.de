import React from "react";
import styled from "styled-components";
import { Link } from "../../components/link";
import { GuideCard } from "./guideCard";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gallade};
  padding: ${({ theme }) => theme.spacing.padding.gigantic};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.maxContentWidth};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.bright};
`;

const GuidesSectionHeading = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.gigantic};
  font-weight: bold;
`;

const GuideCards = styled.div`
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

const ToAllGuides = styled(Link)`
  color: ${({ theme }) => theme.colors.text.bright};
  font-size: ${({ theme }) => theme.sizes.font.large};
  text-decoration: underline;
`;


export type Guide = {
  headLine: string;
  description: string;
  timeToRead: string;
};

export type GuidesSectionProps = {
    guides: Guide[];
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ guides }) => {
    return (
        <Container>
            <Content>
                <GuidesSectionHeading>
                    Guides
                </GuidesSectionHeading>
                <GuideCards>
                    { guides.slice(0, 3)
                        .map(({ headLine, description, timeToRead }, index) => (
                            <GuideCard
                              key={headLine}
                              headLine={headLine}
                              description={description}
                              timeToRead={timeToRead}
                            />
                        ))
                    }
                </GuideCards>
                <ToAllGuides to="/guides">Alle Guides anschauen</ToAllGuides>
            </Content>
        </Container>
    );
}