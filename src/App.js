
import './App.css';
import CustomNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/Movielist';
import Movies1 from './components/MovieList2';
import { Container } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Movies2 from './components/MovieList3';
import Footercustom from './components/Footer';
import BasicExample from './components/Genres';


function App() {
  return (
    <div className="App bg-dark">
      <header>
        <CustomNavbar/>
      </header>
      <main>
        <BasicExample></BasicExample>
        <Container className='text-start mt-4 text-white' >
          <Movies/>
        </Container>
        <Container className='text-start text-white mt-3'>
          <Movies1/>
        </Container>
        <Container className='text-start text-white mt-3'>
          <Movies2/>
        </Container>
      </main>
      <Footercustom/>
    </div>
  );
}

export default App;
