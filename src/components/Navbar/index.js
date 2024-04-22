import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#certifications'>Certifications</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMenu}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleMenu}>Skills</MobileLink>
            <MobileLink href='#certifications' onClick={toggleMenu}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleMenu}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleMenu}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.colors.primary1}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <Close onClick={toggleMenu} style={{ color: 'white', cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} />
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
