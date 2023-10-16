import styled from 'styled-components';
import Image from 'next/image';

import CONSTRAINTS from 'constants/constraints';

import mikul from 'assets/img/mikey.jpg';

import LINKS from 'constants/links';

import InlineGradient from 'components/shared/InlineGradient';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  margin-bottom: 60px;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
    /* flex-direction: column; */
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    align-items: center;
    justify-items: center;
  }
`

const DirectorImage = styled.div`
  img {
    border-radius: 35px;
  }
  
`

const EncouragingText = styled.div`
  // margin: 30px;
  margin-right: 0px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  ${CONSTRAINTS.DEFAULT_BP} {
    br {
      display: none;
    }
    margin: 20px;
  }
`

const Message = styled.p`
  font-weight: 200;
`

const Citation = styled.div`
  ${CONSTRAINTS.DEFAULT_BP} {
    align-self: flex-end;
    margin-top: 8px;
  }
`

const Name = styled.p`
  font-weight: 200;
  font-style: italic;
  position: relative;
`

const Hyphen = styled.span`
  position: absolute;
  left: -13px;
`

const Title = styled.p`
  font-weight: 700;
`

const VolunteerAppLink = styled.a`
  font-weight: 700;
  color: #D275FE;
`


function DirectorQuote() {
  return (
    <Wrapper>
      {/* <DirectorImage>
        <Image src={mikul} width={300} height={300} alt="HackUTD's Director"/>
      </DirectorImage> */}
      <EncouragingText>
        <Message>
          We&apos;re currently looking for more team members to join our worldwide team! Please fill out an application <VolunteerAppLink href={LINKS.VOLUNTEER}>here.</VolunteerAppLink> Without our team members, <InlineGradient>none of this would be possible.</InlineGradient>
        </Message>
      </EncouragingText>
    </Wrapper>
  )
}

export default DirectorQuote;