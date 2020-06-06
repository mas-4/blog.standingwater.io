import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const ArticleContainer = styled.div`
`
const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <div>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <ArticleLink to={node.fields.slug} key={node.id}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span> — {node.frontmatter.date}</span>
                    </h3>
                    <p>{node.excerpt}</p>
                </ArticleLink>
            ))}
        </div>
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

