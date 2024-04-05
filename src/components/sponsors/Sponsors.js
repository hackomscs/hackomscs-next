import Header from '../../components/shared/Header';
import styled from 'styled-components';
import Image from 'next/image';
// import SponsorGrid from './SponsorGrid';

const SubHeader = styled.h3`
  color: var(--subheader);
  font-size: 32px;
  margin-bottom: 13px;
  margin:10px
  ${props => props.partner && `
    margin-top: 0px;
    ${CONSTRAINTS.DEFAULT_BP} {
      margin-top: 20px;
    }
  `}
`

const sponsorStyle = {
    borderRadius: '25px',
    margin: '30px',
    width: '200px',
    height: '200px',
}




export default function Sponsors() {
  return (
    <>
      <Header title="Sponsors" givenId="sponsors" />
      <SubHeader>Thank you to our sponsors!</SubHeader>
      <a href="https://community.aws/students" target="_blank" rel="noreferrer">
        <Image alt='sponsor image' src={require('/src/assets/img/AWS.png')} style={sponsorStyle} />
      </a>
      {/* <SponsorGrid /> */}
    </>
  )
}