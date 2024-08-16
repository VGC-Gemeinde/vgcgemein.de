import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 575px;
  max-height: 575px;
`;

type ImageContainerProps = {
  $backgroundImage: string;
};

const ImageContainer = styled.div<ImageContainerProps>`
  min-height: 400px;
  max-height: 400px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
`;

type SeperatorProps = {
  $color: string;
};

const Seperator = styled.div<SeperatorProps>`
  min-height: 3px;
  max-height: 3px;
  background: ${({ $color }) => $color};
`;

const InformationSection = styled.div`
  background: ${({ theme }) => theme.colors.gallade};
  color: ${({ theme }) => theme.colors.text.bright};
  padding: ${({ theme }) => theme.spacing.containerPadding.small};
  flex-grow: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const HeadLine = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.verticalBuffer.normal};
`;

const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: lighter;
  margin-bottom: ${({ theme }) => theme.spacing.verticalBuffer.normal};
`;

const Description = styled.div``;

type NewsCardProps = {
  seperatorColor: string;
  imageSrc: string;
  headLine: string;
  date: string;
  description: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  seperatorColor,
  imageSrc,
  headLine,
  date,
  description,
}) => {
  return (
    <Container>
      <ImageContainer $backgroundImage={imageSrc} />
      <Seperator $color={seperatorColor} />
      <InformationSection>
        <HeadLine>{headLine}</HeadLine>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </InformationSection>
    </Container>
  );
};

export { NewsCard };
export type { NewsCardProps };
