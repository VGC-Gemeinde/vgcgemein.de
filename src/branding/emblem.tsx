import { StaticImage } from "gatsby-plugin-image";

const Emblem: React.FC = () => {
  const src = "../images/community-emblem.png";
  const alt = "VGC Gemeinde Logo";

  return <StaticImage src={src} alt={alt} height={250} />;
};

export { Emblem };
