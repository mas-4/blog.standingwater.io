import { Link } from "gatsby"
import React from "react"
import heron from "../images/heron.svg"
import styled from "styled-components"

const HeadContainer = styled.div`
    width: 50%;
    margin: 1rem auto;
`
const Banner = styled.div`
`
const HomeLink = styled(Link)`
    font-family: Hack;
    color: black;

    text-decoration: none;
    font-size: 1.5rem;

    margin: 0 auto;
    &:hover {
        color: grey;
    }
    img {
        vertical-align: middle;
        max-width: 70px;
    }
`
const Links = styled.div`
    font-size: 1.5rem;
    a {
        text-decoration: none;
        margin: 0 1rem;
        color: black;
        &:hover {
            color: grey;
        }
    }
`

const SmallHeader = ({ siteTitle }) => (
    <HeadContainer>
        <Banner>
            <HomeLink to="/">
                {siteTitle}
            </HomeLink>
            <HomeLink to="/">
                <img
                    src={heron}
                    className="logo"
                    alt="Heron Logo"
                />
            </HomeLink>
        </Banner>
        <Links>
            <a class="fas fa-home" href="https://standingwater.io"></a>
            <a class="fab fa-github" href="https://github.com/malan88"></a>
            <a class="fab fa-linkedin-in" href="https://linkedin.com/in/michael-sendker"></a>
            <a class="fab fa-stack-overflow" href="https://stackoverflow.com/story/malan88"></a>
        </Links>
    </HeadContainer>
)

export default SmallHeader
