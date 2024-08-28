import { Navbar, Container, Nav, Row, Col,Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark mt-0 nav" >
      <Container >
        <Row className='me-3 d-flex'>
            <div className='d-flex align-items-center'>
         <Navbar.Brand href="#home"><img src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt="netflix logo" className='logo' /></Navbar.Brand>

          
            <Nav.Link href="#features" className=' text-white'>Home</Nav.Link>
            <Nav.Link href="#tvshows" className=' text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#movies" className=' text-white'>Movies</Nav.Link> 
            <Nav.Link href="#recentlyadd" className=' text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#mylist" className=' text-white'>My List</Nav.Link>    </div> 
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