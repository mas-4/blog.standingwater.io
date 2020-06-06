import { Link } from "gatsby"
import React from "react"
import Icon from "../images/heron.svg"
import styled from "styled-components"

const HomeLink = styled(Link)`
    font-family: Hack;
    color: black;

    text-decoration: none;
    font-size: 3rem;

    margin: 0 auto;

    .icon {
        vertical-align: middle;
    }
    &:hover {
        color: grey;
        .icon {
            fill: grey;
        }
    }
    &:focus {
        outline: none; // eliminate the ugly ass border
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
        &:focus {
            outline: none; // eliminate the ugly ass border
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
                <Icon className="icon" />
            </HomeLink>
        </Banner>
        <Links>
            <a aria-hidden="true" aria-label="github" className="fab fa-github" href="https://github.com/malan88"></a>
            <a aria-hidden="true" aria-label="linkedin" className="fab fa-linkedin-in" href="https://linkedin.com/in/michael-sendker"></a>
            <a aria-hidden="true" aria-label="stackoverflow" className="fab fa-stack-overflow" href="https://stackoverflow.com/story/malan88"></a>
        </Links>
    </HeadContainer>
)

export default Header
