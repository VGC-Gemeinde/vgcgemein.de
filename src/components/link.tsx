import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(GatsbyLink)`
  color: ${({ theme }) => theme.colors.gallade};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-width: ${({ theme }) => theme.accessibility.focussed.outlineWidth};
    outline-color: ${({ theme }) => theme.colors.gallade};
  }
`;

type LinksProps = Omit<GatsbyLinkProps<unknown>, "ref">;

const Link: React.FC<LinksProps> = (props) => {
  return <StyledLink {...props} />;
};

export { Link };
export type { LinksProps };
