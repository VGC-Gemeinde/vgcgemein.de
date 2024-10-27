import { Options } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import { ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text"
import { ReactNode } from "react"
import { BLOCKS, INLINES  } from "@contentful/rich-text-types"
import { Link } from "./components/link"
import styled from "styled-components"

export const NewsCardRenderTextOptions: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description } = node.data.target
            if (!gatsbyImageData) {
                return null
            }
            return <GatsbyImage image={gatsbyImageData} alt={description} />
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return children
        }
    },
}