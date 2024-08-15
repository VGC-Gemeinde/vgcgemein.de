import { StaticImage } from "gatsby-plugin-image";

const Icon: React.FC = () => {
  const src = "../images/community-icon.png";
  const alt = "VGC Gemeinde Logo";

  return <StaticImage src={src} alt={alt} height={50} />;
};

export { Icon };
