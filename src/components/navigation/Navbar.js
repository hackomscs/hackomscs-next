import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import CONSTRAINTS from '../../constants/constraints';

import MobileNav from '../../components/navigation/MobileNav';

const NavContainer = styled.nav`
  margin-top: 20px;
  z-index: 1; // for stars
  ${CONSTRAINTS.DEFAULT_BP} {
    display: none;
  }
  // TODO: Make a better solution for this line
  /* @media screen and (max-width: ${CONSTRAINTS.DEFAULT_RAW + 100}px) {
    display: none;
  } */
`
const NavContents = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`
const NavItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;

  a {
    font-size: 18px;
    text-decoration: none;
    color: #e4e4f6;
    font-weight: bold;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    position: relative;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: ${CONSTRAINTS.DEFAULT_RAW + 100}px) {
      font-size: 16px;
    }
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    bottom: -8px;
    left: 0;
    border-radius: 3px;

    transition: transform 0.3s ease;
    transform-origin: bottom right;
    transform: scaleX(0);
  }

  a:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`


function NavBar() {
  return(
    <>
      <NavContainer>
        <NavContents>
          <NavItem>
            <Link href="#">
              <Image className="logo-img" height="60" width="60" src={require("/src/assets/img/HackOMSCSLogoWhite.png")} />
            </Link>
          </NavItem>
          <NavItem><Link href="#about">About Us</Link></NavItem>
          <NavItem><Link href="#faq">FAQ</Link></NavItem>
          <NavItem><Link href="#team">Meet the Team</Link></NavItem>
          <NavItem><Link href="#support">Support Us</Link></NavItem>
          <NavItem><Link href="#sponsors">Sponsors</Link></NavItem>
        </NavContents>
      </NavContainer>
      <MobileNav/>
    </>
  )
}

export default NavBar;