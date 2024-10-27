import { useScreenSize } from "../../hooks/useScreenSize";
import { DesktopNavigation } from "./desktop";
import { lazy } from "react";

const MobileNavigation = lazy(() => import("./mobile"));

const Navigation: React.FC = () => {
  const { upTo } = useScreenSize();

  if (upTo("small") && typeof window !== "undefined") {
    return <MobileNavigation />;
  }

  return <DesktopNavigation />;
};

export { Navigation };
