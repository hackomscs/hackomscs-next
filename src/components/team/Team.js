import Header from '../../components/shared/Header';
import DirectorQuote from '../../components/team/DirectorQuote';
import TeamCarousel from '../../components/team/TeamCarousel';

export default function Team() {
  return (
    <>
    <Header title="Join Our Team" givenId="team" />
    <DirectorQuote />
    <TeamCarousel />
    </>
  )
}