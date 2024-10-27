import React from "react";
import styled from "styled-components";
import { Link } from "../../components/link";
import { GuideCard } from "./guideCard";
import { useScreenSize } from "../../hooks/useScreenSize";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gallade};
  display: flex;
  flex-direction: column;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.maxContentWidth};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.bright};
`;

const ContentSmall = styled(Content)`
  align-items: center;
`;

const GuidesSectionHeading = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.gigantic};
  font-weight: bold;
`;

const GuideCards = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.buffer.large};
  & > * {
    margin-top: ${({ theme }) => theme.spacing.buffer.large};
    margin-bottom: ${({ theme }) => theme.spacing.buffer.large};
  }
`;

const GuideCardsLarge = styled(GuideCards)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GuideCardsSmall = styled(GuideCards)`
  flex-direction: column;
  align-items: center;
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
    const { upTo } = useScreenSize();

    const ContainerC = upTo("tiny") ? ContainerTiny : ContainerLarge;
    const ContentC = upTo("small") ? ContentSmall : Content;
    const GuideCardsC = upTo("small") ? GuideCardsSmall : GuideCardsLarge;

    return (
      <ContainerC>
        <ContentC>
          <GuidesSectionHeading>
            Guides
          </GuidesSectionHeading>
          <GuideCardsC>
            { guides
                .map(({ headLine, description, timeToRead }, index) => (
                  <GuideCard
                    key={headLine}
                    headLine={headLine}
                    description={description}
                    timeToRead={timeToRead}
                  />
                ))
            }
          </GuideCardsC>
          <ToAllGuides to="/guides">Alle Guides anschauen</ToAllGuides>
        </ContentC>
      </ContainerC>
    );
}