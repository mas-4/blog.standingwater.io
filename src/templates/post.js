import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const H1 = styled.div`
    font-family: Hack;
    font-size: 2rem;
    margin-bottom: 1rem;
`
const H2 = styled.div`
    font-family: Hack;
    margin-bottom: 2rem;
`
const Body = styled.div`
    font-family: Montserrat;
    font-size: 1.2rem;
    h1, h2, h3, h4, h5 {
        font-family: Hack;
    }
    a {
        text-decoration: none;
        color: grey;
        &:visited {
            color: lightgrey;
        }
        &:hover {
            color: darkgrey;
        }
    }
    blockquote {
        font-family: Hack;
    }
`

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout large={false} title={post.frontmatter.title}>
            <SEO title={post.frontmatter.title} />
            <div>
                <H1>{post.frontmatter.title}</H1>
                <H2>{post.frontmatter.date}</H2>
                <Body dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
          html
          frontmatter {
              title
              date
          }
      }
  }
`
