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
          {/* <img src="./images/logo.svg" alt="logo.svg" /> */}
          {/* <h1 className="slides__title" style={this.props.style}>LJ Interior Design</h1>
          <p className="slides__subtitle" style={this.props.style}>Modern elegant design.</p>
          <p className="slides__subtitle" style={this.props.style}>Don't let your imagination be your limit.</p> */}
        </div>
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide} className="single_slide">
              <img src={slide} alt={slide} width="100%" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;