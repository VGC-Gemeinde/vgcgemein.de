type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export { Image };
export type { ImageProps };
