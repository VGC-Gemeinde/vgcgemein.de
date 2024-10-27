import styled from "styled-components";
import { Image } from "../../components/image";
import { PropsWithChildren, useEffect, useRef } from "react";
import Dotdotdot from "dotdotdot-js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${40 * 16}px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  border: 1px solid black;
`;

const TeaserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Teaser = styled(Image)`
  height: ${40 * 9}px;
`

const Seperator = styled.div`
  min-height: 3px;
  max-height: 3px;
  background: ${({ theme }) => theme.colors.germany.gradiant(theme)};
`;

const InformationSection = styled.div`
  background: ${({ theme }) => theme.colors.gallade};
  color: ${({ theme }) => theme.colors.text.bright};
  padding: ${({ theme }) => theme.spacing.padding.normal};
  flex-grow: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const HeadLine = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.large};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.buffer.normal};
`;

const Date = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.small};
  font-weight: lighter;
  margin-bottom: ${({ theme }) => theme.spacing.buffer.normal};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.buffer.small };
  font-size: ${({ theme }) => theme.sizes.font.normal};
  height: 150px;
`;

export type NewsCardProps = PropsWithChildren<{
  imageSrc: string;
  headLine: string;
  date: string;
}>;

export const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  headLine,
  date,
  children
}) => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current !== null) {
      new Dotdotdot(contentRef.current)
    }
  }, [contentRef.current])

  return (
    <Container>
      <TeaserContainer>
        <Teaser src={imageSrc} alt="bla" />
      </TeaserContainer>
      <Seperator />
      <InformationSection>
        <HeadLine>{headLine}</HeadLine>
        <Date>{date}</Date>
        <Content ref={contentRef}>
          {children}
        </Content>
      </InformationSection>
    </Container>
  );
};
