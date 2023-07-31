import {Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo2.png';
import linkedin from '../assets/img/nav-icon1.svg';
import github from '../assets/img/nav-icon3.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Add this state variable for menu state

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])

      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

      const handleMenuClick = () => {
        setMenuOpen(!menuOpen); // Toggle menu state on click
      }

      // Scroll to the contact section with id "connect"
  const handleConnectClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      const connectSectionOffset = connectSection.getBoundingClientRect().top;
      const navbarHeight = 80; // Adjust this value according to your navbar height
      window.scrollTo({
        top: connectSectionOffset - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon" onClick={handleMenuClick}></span>
          </Navbar.Toggle>
        
          <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "menu-open" : "menu-closed"}>
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/karishmasharma07/"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/sharmakarish"><img src={github} alt="" /></a>                </div>
                <button href="#connect" className="vvd" onClick={handleConnectClick}> <span >Lets's Connect!</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}