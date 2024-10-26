import { useScreenSize } from "../../hooks/useScreenSize";
import { MobileNavigation } from "./mobile";
import { DesktopNavigation } from "./desktop";

const Navigation: React.FC = () => {
  const { upTo } = useScreenSize();

  if (upTo("small")) {
    return <MobileNavigation />;
  }

  return <DesktopNavigation />;
};

export { Navigation };
