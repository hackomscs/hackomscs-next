import Header from 'components/shared/Header';
import styled from 'styled-components';
import SponsorGrid from 'components/sponsors/SponsorGrid';


const SubHeader = styled.h3`
  color: var(--subheader);
  font-size: 32px;
  margin-bottom: 13px;

  ${props => props.partner && `
    margin-top: 0px;
    ${CONSTRAINTS.DEFAULT_BP} {
      margin-top: 20px;
    }
  `}
`

export default function Sponsors() {
  return (
    <>
    <Header title="Sponsors" givenId="sponsors" />
    <SubHeader>Coming Soon!</SubHeader>
    {/* <SponsorGrid /> */}
    </>
  )
}