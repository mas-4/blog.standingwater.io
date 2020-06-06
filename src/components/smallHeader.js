import { Link } from "gatsby"
import React from "react"
import Icon from "../images/heron.svg"
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
