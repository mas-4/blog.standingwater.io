import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

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
`

export default ({ data }) => {
    const post = data.markdownRemark
    console.log(post)
    return (
        <Layout>
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
