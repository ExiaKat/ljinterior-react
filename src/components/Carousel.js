import React, { Component } from 'react';
import Slider from 'react-slick';
import { slides } from '../data/images';

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
    }

    return (
      <div className="slides__container">
        <div className="slides__backdrop"></div>
        <div className="slides__greeting">
          <h1 className="slides__title" style={this.props.style}>Imagination</h1>
          <p className="slides__subtitle" style={this.props.style}>Never loose your passion.</p>
          <p className="slides__subtitle" style={this.props.style}>The power of imagination makes us infinite.</p>
        </div>
        <Slider {...settings}>
          {slides.map(slide => (
            <div className="single_slide">
              <img src={slide} alt={slide} width="100%" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;