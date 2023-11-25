import styled from 'styled-components';

import Hero from 'components/hero/Hero';
import Hackathons from 'components/hackathons/Hackathons';
import Team from 'components/team/Team';
import Support from 'components/support/Support';
import Sponsors from 'components/sponsors/Sponsors';
import Footer from 'components/navigation/Footer';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Main() {
  return (
    <Container>
      <Hero />
      <Hackathons />
      <Team />
      <Support />
      <Sponsors />
      <Footer />
    </Container>
  )
}