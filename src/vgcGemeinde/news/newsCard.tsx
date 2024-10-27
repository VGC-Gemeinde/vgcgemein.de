import styled from "styled-components";
import { Image } from "../../components/image";
import { PropsWithChildren, useEffect, useRef } from "react";
import Dotdotdot from "dotdotdot-js";
import { useScreenSize } from "../../hooks/useScreenSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  border: 1px solid black;
`;

const ContainerLarge = styled(Container)`
  width: ${40 * 16}px;
`;

const ContainerTiny = styled(Container)`
  width: ${20 * 16}px;
`;

const TeaserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const TeaserLarge = styled(Image)`
  height: ${40 * 9}px;
`

const TeaserTiny = styled(Image)`
  height: ${20 * 9}px;
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
  image: { url: string; alt: string };
  headLine: string;
  date: string;
}>;

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  headLine,
  date,
  children
}) => {
  const { upTo } = useScreenSize();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current !== null) {
      new Dotdotdot(contentRef.current)
    }
  }, [contentRef.current]);

  const ContainerC = upTo("tiny") ? ContainerTiny : ContainerLarge;
  const TeaserC = upTo("tiny") ? TeaserTiny : TeaserLarge;

  return (
    <ContainerC>
      <TeaserContainer>
        <TeaserC src={image.url} alt={image.alt} />
      </TeaserContainer>
      <Seperator />
      <InformationSection>
        <HeadLine>{headLine}</HeadLine>
        <Date>{date}</Date>
        <Content ref={contentRef}>
          {children}
        </Content>
      </InformationSection>
    </ContainerC>
  );
};
