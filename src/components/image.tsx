export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />;
};