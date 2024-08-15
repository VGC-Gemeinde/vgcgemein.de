import styled, { useTheme } from "styled-components";

type StyledSeperatorProps = {
  $startColor: string;
  $endColor: string;
};

const StyledSeperator = styled.div<StyledSeperatorProps>`
  height: 80px;
  background: linear-gradient(
    to bottom right,
    ${({ $startColor }) => $startColor} 0%,
    ${({ $startColor }) => $startColor} 49%,
    ${({ $endColor }) => $endColor} 50%,
    ${({ $endColor }) => $endColor} 100%
  );
`;

type SeperatorProps = {
  direction: "FILLED_TO_UNFILLED" | "UNFILLED_TO_FILLED";
};

const Seperator: React.FC<SeperatorProps> = ({ direction }) => {
  const theme = useTheme();

  const startColor =
    direction === "FILLED_TO_UNFILLED"
      ? theme.colors.gallade
      : theme.colors.background;
  const endColor =
    direction === "FILLED_TO_UNFILLED"
      ? theme.colors.background
      : theme.colors.gallade;

  return <StyledSeperator $startColor={startColor} $endColor={endColor} />;
};

export { Seperator };
export type { SeperatorProps };
