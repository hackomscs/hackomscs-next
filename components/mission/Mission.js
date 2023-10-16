import { useState, useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Header from 'components/shared/Header';
import InlineGradient from 'components/shared/InlineGradient';
import More from 'components/mission/More';

import CONSTRAINTS from 'constants/constraints';
import ThemeContext from 'context/ThemeContext';

import default_group from 'assets/img/group/default.jpeg';
import fun_group from 'assets/img/group/fun.jpeg';

const Container = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW + 150}px;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  p {
    text-align: justify;
    font-size: 16px;
  }
  margin-bottom: 30px;
  position: relative;
  @media screen and (max-width: 900px) {
    max-width: 700px;
  }
`

const Grid = styled.div`
  display: grid;
  #grid-template-columns: 1fr 1fr;
  max-width:700px;
  grid-gap: 25px;
  // align-items: center;
  margin-top: 25px;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 45px;
  position: relative;
  // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 300px;
  }
`

const TeamImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  transition: opacity 0.5s;
  border-radius: 45px;


  ${props => props.$fun && `
    opacity: 0.01; // hack for some obscure react issue
    ${props.$hovered && `
      opacity: 1;
    `}
  `}
`

const Description = styled.div`

  ${CONSTRAINTS.DEFAULT_BP} {
    margin-top: 0px;
  }
`

const AccentLogo = styled.img`
  position: absolute;
  height: 250px;
  z-index: -1;
  bottom: 0px;
  right: -50px;
`

const LearnMore = styled.p`
  margin-top: 20px;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`
const Quote = styled.h3`
  text-align: center;
`

export default function Mission() {
  const [showMore, setShowMore] = useState(false);
  const { dark } = useContext(ThemeContext);

  return (
    <Container>
      <Header title="About Us" givenId="about" />
      <Grid>
      <Quote>
          "I learned more in one weekend than I did in the last month of lectures!"
      </Quote>
        {/* <ImageContainer>
          <TeamImage src={default_group} objectFit="cover" layout="fill" alt="a team picture of the HackUTD organizers" />
        </ImageContainer> */}
        <Description>
          
          <p>
            The average hacker learns so much, therefore we want to bring that experience to OMSCS! Hack OMSCS is a free, 24-hour, virtual hackathon. This event aims to join OMSCS students from around the world to <InlineGradient>solve novel challenges,</InlineGradient> win exciting prizes, and meet loads of new friends! This event is open to everyone and is an opportunity for students of all backgrounds, skill levels, and experiences to innovate and showcase their ideas.
          </p>
          <p style={{ marginTop: 20 }}>
            Whether you are a first-time hacker or a seasoned veteran, we encourage you to enter hackOMSCS with <InlineGradient>enthusiasm and curiosity.</InlineGradient> Our hope is that you <InlineGradient>challenge yourself</InlineGradient> with a fun project, learn something new along the way, and feel proud of what you accomplished at the end of it all.
          </p>
          {/* <LearnMore onClick={() => setShowMore(true)}>More about us</LearnMore> */}
          <More isShown={showMore} callback={() => setShowMore(false)} />
        </Description>
      </Grid>
      {!dark && <AccentLogo src={"svg/accent_logo.svg"} />}
      {dark && <AccentLogo src={"svg/accent_logo_dark.svg"} />}
    </Container>
  )
}