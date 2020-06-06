import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import heron from "../images/heron.svg"
import styled from "styled-components"

const Title = styled(Link)`
    font-family: Hack;
    color: black;

    text-decoration: none;
    font-size: 3rem;

    margin: 0 auto;
`
const HeadContainer = styled.div`
    width: 50%;
    margin: 0 auto;
`

const Header = ({ siteTitle }) => (
    <HeadContainer>
        <Title to="/">
            {siteTitle}
        </Title>
        <Title to="/">
            <img
                src={heron}
                alt="Heron Logo"
                style={{
                    verticalAlign: "middle",
                    minWidth: "75px",
                }}
            />
        </Title>
    </HeadContainer>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
