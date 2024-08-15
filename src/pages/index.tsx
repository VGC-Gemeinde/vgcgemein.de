import type { HeadFC, PageProps } from "gatsby";
import { DefaultLayout } from "../layouts/default";

const IndexPage: React.FC<PageProps> = () => {
  return <DefaultLayout />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>VGC Gemeinde</title>;
