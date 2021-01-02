import React, { useEffect, useState } from 'react'
import { Col, Container, Form, FormControl, Image,  Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import FormModal from './FormModal'
import logo from './assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Header = () => {
  const icon = <FontAwesomeIcon icon={faUserCircle} size='2x' />
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn'))

  useEffect(() => {
    axios.get(`http://13.212.139.34:3000/user/profile/${localStorage.getItem('email')}`).then(
      res => {
        const { nama, picture } = res.data.data
        localStorage.setItem('nama', nama)
        localStorage.setItem('picture', picture)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  })

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('token')
    localStorage.removeItem('nama')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('picture')
    localStorage.removeItem('searchTerm')
    setLoggedIn(false)
  }

  let searchTerm = ''

  const handleSearch = () => {
    localStorage.setItem('searchTerm', searchTerm)
  }

  return (
    <>
      <Navbar className='bg-header-footer navbar-dark' sticky='top' expand='lg'>
        <Container>
          <NavbarBrand href='/'><Image className='logo' src={logo} alt='logo app' /></NavbarBrand>
          
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Col>
              <Form inline onSubmit={handleSearch} action='/searchResult'>
                  <FormControl type="text" placeholder="Enter movie title" className="mx-auto w-75" onChange={e => searchTerm = e.target.value} />
              </Form>
            </Col>

            <Nav className='text-center'>
              {
                isLoggedIn
                ? <NavDropdown
                  title={
                    localStorage.getItem('picture') === '/img/null' || !localStorage.getItem('picture') 
                      ? icon 
                      : localStorage.getItem('picture')
                  } 
                  id="basic-nav-dropdown">
                  <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSignOut} href='/'>Sign out</NavDropdown.Item>
                </NavDropdown>
                : <FormModal />
              }
                {/* <NavDropdown title={icon} id="basic-nav-dropdown">
                  <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                  <NavDropdown.Item>Sign out</NavDropdown.Item>
                </NavDropdown>
                <FormModal /> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header