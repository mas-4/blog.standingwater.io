import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { globalHistory  } from "@reach/router"

import Header from "./header"
import SmallHeader from "./smallHeader"
import "./layout.css"
import styled from "styled-components"

const Footer = styled.div`
    font-family: Hack;
    margin-top: 5rem;
    a {
        color: black;
        text-decoration: none;
        &:hover {
            color: grey;
        }
    }
`


const Layout = ({ children, location}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }`)
    const path = globalHistory.location.pathname
    return (
        <>
            { path === '/' &&
            <Header siteTitle={data.site.siteMetadata.title} />
            }
            { path !== '/' &&
                <SmallHeader siteTitle={data.site.siteMetadata.title} />
            }
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <Footer>
                    © {new Date().getFullYear()} Michael Sendker,{" "}
                    <a href="https://standingwater.io">standingwater.io</a>,{" "}
                    Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Footer>
            </div>
        </>
    )
}

export default Layout
