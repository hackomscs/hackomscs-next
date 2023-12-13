import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';

import CONSTRAINTS from '../../constants/constraints';

import NavBar from '../../components/navigation/Navbar';
import StartButton from './StartButton';

//import Sparkles from '../../components/Sparkles';

import DarkModeToggle from '../../components/shared/DarkModeToggle';
import RegisterButton from '../../components/support/RegisterButton';

import ThemeContext from '../../context/ThemeContext';
import Sparkles from '../Sparkles';


const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: left;

  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW + 900}px;
  height: 100vh;
  color: #e4e4f6;
  box-sizing: border-box;
  position: relative;

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 85vh;
    min-height: initial;
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 18px;
  font-weight: 200;
  width: 100%;

  ${CONSTRAINTS.DEFAULT_BP} {
    padding: 10px 5px;
    padding-top: 20px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(2) {
    margin-top: 15px;
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    flex-direction: column;
    margin-top: 0px;
  }
`

/** Gradient background */
const Background = styled.div`
  z-index: -1;

    background: linear-gradient(154deg, #243166, #105c52);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 22s ease infinite;
    -moz-animation: AnimationName 22s ease infinite;
    -o-animation: AnimationName 22s ease infinite;
    animation: AnimationName 22s ease infinite;
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-o-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }



  width: 100vw;
  height: 100%;

  ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL}
`

/** Container for the logo + text in hero */
const WelcomeContent = styled.div`
  padding-bottom: 400px;
  text-align: left;
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

/** 'HackOMSCS' title */
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
const Logo = styled.div` //might want to include for mobile
    position: absolute;
    top: 0%;
    right: 0%;

    .logo-img {
      height:60px;
      width:60px;
    }
`


// const ExperimentalFlexContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `

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

const up_down = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-10px);
  } 100% {
    transform: translateY(0px);
  }
`

const TowerDiv = styled.div`
padding-bottom:5px;
padding-right:150px;
display: flex;
flex-direction: column;
align-items: center;
height:100%;
z-index: 2;

.tower-img {
  animation: ${up_down} 3s ease-in-out infinite;
  transition: filter 0.5s;
  filter: drop-shadow(0px 3px 6px rgb(0 0 0 / 0.4));
}

}

${CONSTRAINTS.DEFAULT_BP} {
  min-width: 200px;
  min-width: none;
  width: 100vw;
}
`

const Tower = styled.img`
  height: 100%;
  width:100%;
  object-fit: contain;
`

const CustomShape = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
  line-height: 0;

  .wave-img {
    filter: drop-shadow(4 4 16 black);
  }
`

const waveStyle = {
  position: 'relative',
  display: 'block',
  width: '100%',
  zIndex: '1',
  overflowClipMargin: 'unset',
  overflow: 'visible'
}





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
    <>
      <Container>
        <NavBar />
        <SubContainer>
          <Row>
            <WelcomeContent>
              <SupplementalText>We are</SupplementalText>
              <Title>HackOMSCS</Title>
              <SupplementalText>Georgia Tech OMSCS&apos;s First Ever Hackathon.</SupplementalText>
              <RegisterButton />
            </WelcomeContent>
            <TowerDiv>
              <Tower className="tower-img" src="svg/tower.svg" />
            </TowerDiv>
          </Row>
        </SubContainer>
        <StartButton />
        {showSparkles && <Sparkles />}
        <Background />
      </Container>
      <CustomShape className="bottom-wave">
        <Image className= "wave-img" alt='wave' src={require('/src/assets/img/waves.png')} style = {waveStyle} loading='eager' />
      </CustomShape>
    </>
  )
}
