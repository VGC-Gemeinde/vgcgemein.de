import { Image } from "../../components/image";
import src from "../../images/community-emblem.png";

type VgcGemeindeEmblemProps = {
  className?: string;
};

const VgcGemeindeEmblem: React.FC<VgcGemeindeEmblemProps> = ({ className }) => {
  return <Image src={src} alt="VGC Gemeinde Emblem" className={className} />;
};

export { VgcGemeindeEmblem };
export type { VgcGemeindeEmblemProps };
