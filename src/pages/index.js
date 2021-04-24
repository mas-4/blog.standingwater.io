import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`
const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Hack;
  font-size: 2rem;
  &:hover {
    color: grey;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
const ArticleDate = styled.p`
  font-family: Hack;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`
const ArticleDescription = styled.p`
  font-family: Montserrat;
`
const IndexPage = ({ data }) => (
  <Layout large={true}>
    <SEO title=" " />
    <script
      src="https://kit.fontawesome.com/687d8c3677.js"
      crossOrigin="anonymous"
    ></script>
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleContainer key={node.id}>
          <ArticleLink to={node.fields.slug}>
            {node.frontmatter.title}{" "}
          </ArticleLink>
          <ArticleDate>{node.frontmatter.date}</ArticleDate>
          <ArticleDescription>{node.excerpt}</ArticleDescription>
        </ArticleContainer>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          excerpt(pruneLength: 380)
        }
      }
    }
  }
`
