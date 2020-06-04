import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <h3>
                    {node.frontmatter.title}{" "}
                    <span> — {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`

