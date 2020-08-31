import React from 'react'
import {Container,Row,Col,fluid,Navbar,Nav } from 'react-bootstrap'
import logo from '../images/stunning-logo.png'
import classes from '../Component/TopNavbar.module.css'
function TopNavbar() {
    return (
        <div>
           {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className={classes.navtxt}>
  <Navbar.Brand href="#home"><img src={logo} className={classes.logowrap}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Jobs</Nav.Link>
      </Nav>
    <Nav>
      <div className={classes.acct_bg}>Your Account</div>
      </Nav>
  </Navbar.Collapse>
</Navbar> */}
<Navbar bg="white" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} className={classes.logowrap}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="m-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Jobs</Nav.Link>
      </Nav>
      <Nav>
      <div className={classes.acct_bg}>Your Account</div>
      </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default TopNavbar
