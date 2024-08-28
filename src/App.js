import './App.css';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movielist';
import Movies1 from './components/MovieList2';
import Movies2 from './components/MovieList3';
import TvSeries from './components/TvSeries';
import Footercustom from './components/Footer';
import BasicExample from './components/Genres';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <header>
          <CustomNavbar />
        </header>
        <main>
          <BasicExample />
            <Routes>
              <Route path="/" element={                  <>
                    <Movies />
                    <Movies1 />
                    <Movies2 />
                  </>} />
              <Route path="/tvseries" element={<TvSeries />} />
              <Route path="/movies" element={                  <>
                    <Movies />
                    <Movies1 />
                    <Movies2 />
                  </>} />
            </Routes>
       
        </main>
        <Footercustom />
      </BrowserRouter>
    </div>
  );
}

export default App;

