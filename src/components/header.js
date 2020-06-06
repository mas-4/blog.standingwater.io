import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import heron from "../images/heron.svg"
import styled from "styled-components"

const HomeLink = styled(Link)`
    font-family: Hack;
    color: black;

    text-decoration: none;
    font-size: 3rem;

    margin: 0 auto;
    &:hover {
        color: grey;
    }
`
const HeadContainer = styled.div`
    width: 50%;
    margin: 5rem auto;
`
const Links = styled.div`
    font-size: 2rem;
    a {
        text-decoration: none;
        margin: 1rem;
        color: black;
        &:hover {
            color: grey;
        }
    }
`
const Banner = styled.div`
`

const Header = ({ siteTitle }) => (
    <HeadContainer>
        <Banner>
            <HomeLink to="/">
                {siteTitle}
            </HomeLink>
            <HomeLink to="/">
                <img
                    src={heron}
                    alt="Heron Logo"
                    style={{
                        verticalAlign: "middle",
                        minWidth: "75px",
                    }}
                />
            </HomeLink>
        </Banner>
        <Links>
            <a className="fas fa-home" href="https://standingwater.io"></a>
            <a className="fab fa-github" href="https://github.com/malan88"></a>
            <a className="fab fa-linkedin-in" href="https://linkedin.com/in/michael-sendker"></a>
            <a className="fab fa-stack-overflow" href="https://stackoverflow.com/story/malan88"></a>
        </Links>
    </HeadContainer>
)

export default Header
