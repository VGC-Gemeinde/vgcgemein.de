import { IconType } from "react-icons";
import { useTheme } from "styled-components";

type IconProps = {
  label: string;
  icon: IconType;
};

const Icon: React.FC<IconProps> = ({ label, icon: IconComponent }) => {
  const theme = useTheme();

  return (
    <IconComponent
      color={theme.colors.gallade}
      title={label}
      aria-label={label}
    />
  );
};

export { Icon };
export type { IconProps };
