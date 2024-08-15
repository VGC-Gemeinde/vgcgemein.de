import { StaticImage } from "gatsby-plugin-image";

const Logo: React.FC = () => {
  return (
    <StaticImage src="../images/icon.png" alt="VGC Gemeinde Logo" height={50} />
  );
};

export { Logo };
