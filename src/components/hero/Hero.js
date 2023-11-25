import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';

import CONSTRAINTS from '../../constants/constraints';

import NavBar from '../../components/navigation/Navbar';
import StartButton from './StartButton';

import DarkModeToggle from '../../components/shared/DarkModeToggle';
import RegisterButton from '../../components/support/RegisterButton';

import ThemeContext from '../../context/ThemeContext';

const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW + 200}px;
  height: 100vh;
  color: white;
  box-sizing: border-box;
  position: relative;

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 85vh;
    min-height: initial;
  }
`

/** Gradient background */
const Background = styled.div`
  background: var(--main-gradient);
  z-index: -1;

  width: 100vw;
  height: 100%;

  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
`

/** Container for the logo + text in hero */
const WelcomeContent = styled.div`
  margin-top: 30px;
  text-align: center;
  z-index: 2; // for stars

  div {
    min-height: 36px !important;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    div {
      height: 150px !important;
    }
  }
`

/** 'HackUTD' title */
const Title = styled.h1`
  font-size: 10vh;
  font-size: max(10vh, 100px);
  margin: 5px;
  text-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);

  ${CONSTRAINTS.DEFAULT_BP} {
    font-size: 15vw;
  }
`

/** The text that goes on top and bottom of 'HackUTD' */
const SupplementalText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  padding: 0;

  ${CONSTRAINTS.DEFAULT_BP} {
    font-size: 5vw;
  }
  ${props => props.top && `
    margin-top: 50px;
    ${CONSTRAINTS.DEFAULT_BP} {
      margin-top: 20px;
    }
  `}
`

const ExperimentalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SkylineContainer = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 1;
`

const Skyline = styled.img`
  width: 100vw;
  min-width: 1600px;
  max-height: 40vh;

  ${CONSTRAINTS.DEFAULT_BP} {
    min-width: 1000px;
    min-width: none;
    width: 100vw;
  }
`

/** 
 * Honestly this was kind of just experimentally coded, eventually settled on this as it seemed to solve 
 * the problem of hiding the bottom shadow of the skyline fairly well but another solution might be considered
 * more robust under future consideration; for example, the bottom shadow could be manually corrected and the bottom
 * flattened.
 */
const ShadowHider = styled.div`
  width: 100vw;
  height: 20%;
  background-color: var(--opposite);
  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
  bottom: 0;
`

export default function Hero() {
  // dealing with a ssr problem
  const [showSparkles, setShowSparkles] = useState(false);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    setShowSparkles(true);
  }, [])

  return (
    <Container>
      <NavBar />
      <DarkModeToggle />
      <ExperimentalFlexContainer>
        <WelcomeContent>
          <SupplementalText>We are</SupplementalText>
          <Title>HackOMSCS</Title>
          <SupplementalText>Georgia Tech OMSCS&apos;s First Ever Hackathon.</SupplementalText>
        </WelcomeContent>
        <RegisterButton />
      </ExperimentalFlexContainer>
      <StartButton />
      <Background />
    </Container>
  )
}
