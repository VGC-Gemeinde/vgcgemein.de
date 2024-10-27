import type { GatsbyConfig } from "gatsby";
import 'dotenv/config';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `VGC Gemeinde`,
    siteUrl: `https://vgcgemein.de`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CMS_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
  ],
  jsxRuntime: "automatic",
};

export default config;
