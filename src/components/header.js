import React from "react"
import Icon from "../images/heron.svg"
import styled from "styled-components"

const HomeLink = styled.a`
    font-family: Hack;
    color: black;

    text-decoration: none;

    margin: 0 auto;

    .icon {
        vertical-align: middle;
        @media (max-width:600px){
            max-width: 50px;
        }
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
    font-size: 3rem;
    margin: 5rem auto;
    font-family: Hack;
    @media (max-width:600px){
        font-size: 2rem;
        width: 100%;
        text-align: center;
    }
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
            blog.
            <HomeLink href="https://standingwater.io">
                standingwater.io
                <Icon className="icon" />
            </HomeLink>
        </Banner>
        <Links>
            <a aria-hidden="true" aria-label="github" className="fab fa-github" href="https://github.com/malan88"></a>
            <a aria-hidden="true" aria-label="keybase" className="fab fa-keybase" href="https://keybase.io/m88"></a>
            <a aria-hidden="true" aria-label="stackoverflow" className="fab fa-stack-overflow" href="https://stackoverflow.com/story/malan88"></a>
            <a aria-hidden="true" aria-label="hackerrank" className="fab fa-hackerrank" href="https://hackerrank.com/mas88"></a>
            <a aria-hidden="true" aria-label="kaggle" className="fab fa-kaggle" href="https://kaggle.com/malan88"></a>
            <a aria-hidden="true" aria-label="linkedin" className="fab fa-linkedin-in" href="https://linkedin.com/in/michael-sendker"></a>
            <a aria-hidden="true" aria-label="résumé" className="fas fa-file-pdf" href="https://github.com/malan88/resume/raw/master/main.pdf"></a>
        </Links>
    </HeadContainer>
)

export default Header
