
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
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouterter>
      <header>
        <CustomNavbar/>
      </header>
      <main>
        <Routes>
        <BasicExample></BasicExample>
        <Container className='text-start mt-4 text-white' >
          <Route path="/" element={<Movies/>} />
          </Container>
        <Container className='text-start text-white mt-3'>
        <Route path="/" element={<Movies1 />} />
        </Container>
        <Container className='text-start text-white mt-3'>
          <Route path="/" element={<Movies2/>} />
        </Container>
        </Routes>
      </main>
      <Footercustom/>
      </BrowserRouterter>
    </div>
  );
}

export default App;
