import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';



class TvSeries extends Component {
  state = {
    remoteTvSeries: [],
  };

  fetchSerie = () => {
    fetch('http://www.omdbapi.com/?apikey=6a9548b4&s=Shameless')
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching serie');
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          remoteTvSeries: data.Search || [],
        });
      })
      .catch((error) => {
        console.log('ERROR!', error);
      });
  };

  componentDidMount() {
    this.fetchSerie();
  }

  render() {
    console.log('Render method called');
    const movieGroups = [];
    for (let i = 0; i < this.state.remoteTvSeries.length; i += 5) {
      movieGroups.push(this.state.remoteTvSeries.slice(i, i + 5));
    }

    return (
        <div>
            <h2 className="text-white">Shameless</h2>
        <Carousel>
          {movieGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className='justify-content-between'>
                {group.map((TvSeries, idx) => (
                  <Col key={idx} xs={2} sm={2} md={2}>
                    <img
                      className="d-block w-100"
                      src={TvSeries.Poster}
                      alt={`Poster of ${TvSeries.Title}`}
                    />
                    <h5>{TvSeries.Title}</h5>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default TvSeries;