import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import logo from './assets/logo.jpg'

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} size='3x' className='page' />
  const instagram = <FontAwesomeIcon icon={faInstagram} size='3x' className='page' />
  const twitter = <FontAwesomeIcon icon={faTwitter} size='3x' className='page' />
  const googlePlay = <FontAwesomeIcon icon={faGooglePlay} size='3x' className='page' />
  const appStore = <FontAwesomeIcon icon={faAppStore} size='3x' className='page' />


  return (
    <div className='bg-header-footer text-light'>
      <Container>
        <Row className='pt-5'>
          <Col md='6'>
            <Image src={logo} className='logo' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          </Col>


          <Col md='2'>
            <ul className='list-unstyled'>
              <NavLink className='text-light'><li>Tentang Kami</li></NavLink>
              <NavLink className='text-light'><li>Blog</li></NavLink>
              <NavLink className='text-light'><li>Layanan</li></NavLink>
              <NavLink className='text-light'><li>Karir</li></NavLink>
              <NavLink className='text-light'><li>Pusat Media</li></NavLink>
            </ul>
          </Col>

          <Col md='4'>
            <p>Download</p>
            
            {googlePlay}
            {appStore}

            <p className='mt-4'>Social Media</p>
            {facebook}
            {instagram}
            {twitter}
          </Col>
        </Row>

        <hr />

        <Row className='pb-3'>
          <Col className='text-center'>
            <p>Copyright © 2020 UCMovie.  All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer