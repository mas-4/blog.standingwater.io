import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
    margin: 0 auto;
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
        image: file(relativePath: { eq: "palmettos.jpg"  }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }`)

    const image = data.image.childImageSharp.fluid
    return (
        <>
            <BackgroundImage
                fluid={image}
                style={{ height: "50rem" }}
            >
                <Header siteTitle={data.site.siteMetadata.title} />
            </BackgroundImage>
            <Container>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Container>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
