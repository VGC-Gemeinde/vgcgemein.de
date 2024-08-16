import { Image } from "../components/image";
import src from "../images/community-icon.png";

type CommunityIconProps = {
  className?: string;
};

const CommunityIcon: React.FC<CommunityIconProps> = ({ className }) => {
  return <Image src={src} alt="VGC Gemeinde Logo" className={className} />;
};

export { CommunityIcon };
export type { CommunityIconProps };
