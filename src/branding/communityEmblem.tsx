import { Image } from "../components/image";
import src from "../images/community-emblem.png";

type CommunityEmblemProps = {
  className?: string;
};

const CommunityEmblem: React.FC<CommunityEmblemProps> = ({ className }) => {
  return <Image src={src} alt="VGC Gemeinde Emblem" className={className} />;
};

export { CommunityEmblem };
export type { CommunityEmblemProps };
