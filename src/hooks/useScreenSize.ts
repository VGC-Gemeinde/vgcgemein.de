import { useWindowWidth } from "@react-hook/window-size";
import { useMemo } from "react";
import { useTheme } from "styled-components";

type ScreenSize = "tiny" | "small" | "large";
type UseScreenSize = {
  screenSize: ScreenSize;
  upTo: (size: ScreenSize) => boolean;
  downTo: (size: ScreenSize) => boolean;
};

const ordering: Record<ScreenSize, number> = {
  tiny: 0,
  small: 1,
  large: 2,
};

let upTo = (currentSize: ScreenSize) => (compareSize: ScreenSize) =>
  ordering[currentSize] <= ordering[compareSize];

let downTo = (currentSize: ScreenSize) => (compareSize: ScreenSize) =>
  ordering[currentSize] >= ordering[compareSize];

const useScreenSize = (): UseScreenSize => {
  const width = useWindowWidth();
  const theme = useTheme();
  console.log({ width });

  let screenSize: ScreenSize = "large";

  if (width !== null) {
    if (width <= theme.breakpoints.tiny) {
      screenSize = "tiny";
    } else if (width <= theme.breakpoints.small) {
      screenSize = "small";
    }
  }

  return useMemo(
    () => ({
      screenSize,
      upTo: upTo(screenSize),
      downTo: downTo(screenSize),
    }),
    [screenSize]
  );
};

export { useScreenSize };
export type { ScreenSize, UseScreenSize };
