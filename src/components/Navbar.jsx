import { Navbar, Container, Nav, Row, Col,Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const CustomNavbar = function () {
  const location = useLocation()

  const [linkUrls, setLinkUrls] = useState([
    { path: '/', name: 'Home' },
    { path: '/tvseries', name: 'Tv Shows' },
    { path: '/movies', name: 'Movies' },
    { path: '/recentlyadd', name: 'Recently Added' },
    { path: '/mylist', name: 'My List' },
  ])
  const addActiveOrNot = (path) => {
    return location.pathname === '/' + path ? 'nav-link active' : 'nav-link'
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark mt-0 nav" >
      <Container >
        <Row className='me-3 d-flex'>
            <div className='d-flex align-items-center'>
         <Navbar.Brand href="#home"><img src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt="netflix logo" className='logo' /></Navbar.Brand>

         <Link to="/" className={addActiveOrNot('')}>
              Home
            </Link>
            <Link
              to="/tvseries"
              className={`nav-link${
                location.pathname === '/tvseries' ? ' active' : ''
              }`}
            >
              Tv Shows
            </Link>
            <Link
              to="/movies"
              className={`nav-link${
                location.pathname === '/movies' ? ' active' : ''
              }`}
            >
              Movies
            </Link>
            <Link
              to="/recentlyadd"
              className={`nav-link${
                location.pathname === '/recentlyadd' ? ' active' : ''
              }`}
            >
              Recently Added
            </Link>
            <Link
              to="/mylist"
              className={`nav-link${
                location.pathname === '/mylist' ? ' active' : ''
              }`}
            >
              My List
            </Link>  </div> 
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
          </Nav>
        </Navbar.Collapse>
</Row >

<Row className='d-flex justify-content-end xs-me-0 md-me-5'> 
  <Col xs="11" md='8' >
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-0"
            />
          </Col>
          <Col xs='1'>
            <Button type="submit">Submit</Button>
          </Col>
  </Row>
      </Container>
    </Navbar>
  );
}


export default CustomNavbar