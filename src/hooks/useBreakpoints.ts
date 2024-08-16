import { useWindowSize } from "@uidotdev/usehooks";
import { useTheme } from "styled-components";

const useBreakPoints = () => {
  const { width } = useWindowSize();
  const theme = useTheme();

  if (width === null) {
    return {
      isSmall: false,
      isLarge: true,
    };
  }

  return {
    isSmall: width <= theme.breakpoints.small,
    isLarge: width > theme.breakpoints.small,
  };
};

export { useBreakPoints };
