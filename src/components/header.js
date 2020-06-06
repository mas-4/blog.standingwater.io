import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import heron from "../images/heron.svg"
import styled from "styled-components"

const Title = styled(Link)`
    font-family: Space Mono;

    color: white;
    text-decoration: none;
    font-size: 3rem;

    text-align: center;
    margin: 0 auto;
    text-shadow: 4px 4px 5px #000000;
`
const HeadContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 10rem;
`
const Header = ({ siteTitle }) => (
    <HeadContainer>
        <Title to="/">
            {siteTitle}
        </Title>
        <img
            src={heron}
            alt="Heron Logo"
            style={{
                verticalAlign: "middle",
                minWidth: "75px",
            }}
        />
    </HeadContainer>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
