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
  @media (max-width: 600px) {
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
@media (max-width: 600px) {
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
const IconLink = ({ icon, title, url }) => {
  return (
      <a
        aria-hidden="true"
        aria-label={title.toLowerCase()}
        href={url}
        title={title}
      >
        <span className={icon}/>
    </a>
  )
}
const Banner = styled.div``

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
      <IconLink
        title="GitHub"
        icon="fab fa-github"
        url="https://github.com/malan88"
      />
      <IconLink
        title="Keybase"
        icon="fab fa-keybase"
        url="https://keybase.io/m88"
      />
      <IconLink
        title="Spotify"
        icon="fab fa-spotify"
        url="https://open.spotify.com/user/vsb2duo6ee07ks0tqiudrdqns"
      />
      <IconLink
        title="Stack Overflow"
        icon="fab fa-stack-overflow"
        url="https://stackoverflow.com/story/malan88"
      />
      <IconLink
        title="HackerRank"
        icon="fab fa-hackerrank"
        url="https://hackerrank.com/mas88"
      />
      <IconLink
        title="Kaggle"
        icon="fab fa-kaggle"
        url="https://kaggle.com/malan88"
      />
      <IconLink
        title="LinkedIn"
        icon="fab fa-linkedin-in"
        url="https://linkedin.com/in/michael-sendker"
      />
      <IconLink
        title="Résumé"
        icon="fas fa-file-pdf"
        url="https://github.com/malan88/resume/raw/master/main.pdf"
      />
    </Links>
  </HeadContainer>
)

export default Header
