import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {  Container} from 'react-bootstrap';



class Movies2 extends Component {
  state = {
    remoteMovies2: [],
  };

  fetchMovie = () => {
    fetch('http://www.omdbapi.com/?apikey=6a9548b4&s=Star Wars')
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching movies');
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          remoteMovies2: data.Search || [],
        });
      })
      .catch((error) => {
        console.log('ERROR!', error);
      });
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    console.log('Render method called');
    const movieGroups = [];
    for (let i = 0; i < this.state.remoteMovies2.length; i += 5) {
      movieGroups.push(this.state.remoteMovies2.slice(i, i + 5));
    }

    return (
<Container className='text-start mt-4 text-white'>            <h2>Star Wars</h2>
        <Carousel>
          {movieGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className='justify-content-between'>
                {group.map((movie, idx) => (
                  <Col key={idx} xs={2} sm={2} md={2}>
                    <img
                      className="d-block w-100"
                      src={movie.Poster}
                      alt={`Poster of ${movie.Title}`}
                    />
                    <h5>{movie.Title}</h5>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default Movies2;
