import styled from "styled-components";
import { Icon } from "../../components/icon";
import { FaRegClock } from "react-icons/fa6";
import { useScreenSize } from "../../hooks/useScreenSize";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  border: 1px solid black;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gallade};
`;

const ContainerLarge = styled(Container)`
  width: 420px;
`;

const ContainerTiny = styled(Container)`
  width: 320px;
`;

const HeadLineContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.padding.normal};
  font-size: ${({ theme }) => theme.sizes.font.large};
  font-weight: bold;
`;

const Seperator = styled.div`
  min-height: 3px;
  max-height: 3px;
  background: ${({ theme }) => theme.colors.germany.gradiant(theme)};
`;

const InformationSection = styled.div`
  padding: ${({ theme }) => theme.spacing.padding.normal};
  flex-grow: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeToRead = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.small};
  font-weight: lighter;
  margin-top: ${({ theme }) => theme.spacing.buffer.normal};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.buffer.small};
`;

const Description = styled.div``;

export type GuideCardProps = {
  headLine: string;
  description: string;
  timeToRead: string;
};

export const GuideCard: React.FC<GuideCardProps> = ({
  headLine,
  description,
  timeToRead,
}) => {
  const { upTo } = useScreenSize();

  const ContainerC = upTo("tiny") ? ContainerTiny : ContainerLarge;

  return (
    <ContainerC>
      <HeadLineContainer>
        {headLine}
      </HeadLineContainer>
      <Seperator />
      <InformationSection>
        <Description>{description}</Description>
        <TimeToRead>
          <Icon label="Lesezeit" icon={FaRegClock} />
          {timeToRead}
        </TimeToRead>
      </InformationSection>
    </ContainerC>
  );
};
