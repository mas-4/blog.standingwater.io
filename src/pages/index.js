import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <Link to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span> — {node.frontmatter.date}</span>
                    </h3>
                </Link>
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
                    fields {
                        slug
                    }
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

