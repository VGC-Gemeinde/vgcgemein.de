import { useWindowSize } from "@uidotdev/usehooks";
import { useTheme } from "styled-components";

const useBreakPoints = () => {
  const { width } = useWindowSize();
  const theme = useTheme();

  if (width === null) {
    return {
      isTiny: false,
      isSmall: false,
      isLarge: true,
    };
  }

  return {
    isTiny: width <= theme.breakpoints.tiny,
    isSmall: width > theme.breakpoints.tiny && width <= theme.breakpoints.small,
    isLarge: width > theme.breakpoints.small,
  };
};

export { useBreakPoints };
