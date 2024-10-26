import { Image } from "../../components/image";
import src from "../../images/community-icon.png";

type VgcGemeindeIconProps = {
  className?: string;
};

const VgcGemeindeIcon: React.FC<VgcGemeindeIconProps> = ({ className }) => {
  return <Image src={src} alt="VGC Gemeinde Icon" className={className} />;
};

export { VgcGemeindeIcon };
export type { VgcGemeindeIconProps };
