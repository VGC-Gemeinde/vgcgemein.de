import styled from "styled-components";
import { Image } from "../../components/image";
import { addOpacity } from "../../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${40 * 16}px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
`;

const TeaserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => addOpacity("0.6", theme.colors.germany.black)};
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

const Description = styled.div``;

export type NewsCardProps = {
  imageSrc: string;
  headLine: string;
  date: string;
  description: string;
};

export const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  headLine,
  date,
  description,
}) => {
  return (
    <Container>
      <TeaserContainer>
        <Teaser src={imageSrc} alt={description} />
      </TeaserContainer>
      <Seperator />
      <InformationSection>
        <HeadLine>{headLine}</HeadLine>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </InformationSection>
    </Container>
  );
};
