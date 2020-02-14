import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Lazyload from 'react-lazyload';

class Masonry extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [],
  }

  openLightbox = (images) => {
    this.setState({ isOpen: true, images });
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;

    let lightbox = null
    if (images.length > 0) {
      lightbox = <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })} />
    }

    return (
      <div className="masonry__container" id={this.props.category.name}>
        <h2 className="section-title">{this.props.category.name}</h2>
        <div className="row row__projects">

          {this.props.category.cols.map((column, index) => (
            <div className="col span-1-of-3" key={index}>
              {column.map(subCategory => (
                <div key={subCategory.cover} className="cover__photo" >
                  <div className="mask">
                    <span
                      className="more"
                      onClick={() => this.openLightbox(subCategory.photos)} >
                      {subCategory.name}
                    </span>
                  </div>
                  {this.props.categoryIndex === 0
                    ? <img
                      src={subCategory.cover}
                      alt={subCategory.name}
                      width="100%" />
                    : <Lazyload height={200}>
                        <img
                          src={subCategory.cover}
                          alt={subCategory.name}
                          width="100%" />
                      </Lazyload>
                  }
                </div>
              ))}
            </div>
          ))}
          {isOpen && lightbox}
        </div>
      </div>
    );
  }
}

export default Masonry;