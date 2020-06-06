import { Link } from "gatsby"
import React from "react"
import Icon from "../images/heron.svg"
import styled from "styled-components"

const HeadContainer = styled.div`
    width: 50%;
    margin: 1rem auto;
    @media (max-width:600px){
        width: 100%;
        margin: 0 auto;
    }
    text-align: center;
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
        .icon {
            fill: grey;
        }
    }
    .icon {
        vertical-align: middle;
        max-width: 50px;
    }
    &:focus {
        outline: none; // eliminate the ugly ass border
    }
    @media (max-width:600px){
        font-size: 1rem;
        .icon {
            max-width: 25px;
        }
    }
`

const SmallHeader = ({ siteTitle }) => (
    <HeadContainer>
        <Banner>
            <HomeLink to="/">
                {siteTitle}
                <Icon className="icon" />
            </HomeLink>
        </Banner>
    </HeadContainer>
)

export default SmallHeader
