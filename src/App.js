import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import MainSection from './components/MainSection';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import Masonry from './components/Masonry';
import SideMenu from './components/SideMenu';
import categories from './data/columnHelper';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  state = {
    activeLink: -1,
    className: null,
    style: {}
  }

  waypointEnter = (pos, { previousPosition, currentPosition }) => {
    if (currentPosition == Waypoint.inside && previousPosition === Waypoint.below)
      this.setState({ activeLink: pos });
  };

  waypointLeave = (pos, { previousPosition, currentPosition }) => {
    if (currentPosition === Waypoint.below && previousPosition === Waypoint.inside)
      this.setState((prevState, props) => ({ activeLink: pos - 1 }));
  };

  releaseNav = () => {
    this.setState({
      className: null
    });
  };

  stickyNav = () => {
    this.setState({
      className: 'sticky-nav'
    });
  };

  componentDidMount() {
    this.setState({ style: { transform: 'translateY(0)', color: 'white' } });
    console.log(categories);
  }

  render() {
    return (
      <div className="App">
        <SideMenu />
        <Navigation className={this.state.className} activeLink={this.state.activeLink} />
        <Carousel style={this.state.style} />
        <Parallax
          offsetYMax={0}
          offsetYMin={-5}
          styleOuter={{ position: 'relative', zIndex: 10 }}
          styleInner={{ position: 'absolute' }}
          tag="div"
        >
          <MainSection>
            <Waypoint
              onEnter={this.releaseNav}
              onLeave={this.stickyNav}
            />
            {categories.map((category, index) => (
              <React.Fragment key={category.name}>
                <Waypoint
                  onEnter={(props) => this.waypointEnter(index, props)}
                  onLeave={(props) => this.waypointLeave(index, props)}
                  bottomOffset="50%"
                />
                <Masonry category={category} />
              </React.Fragment>
            ))}
            <Waypoint
              onEnter={(props) => this.waypointEnter(3, props)}
              onLeave={(props) => this.waypointLeave(3, props)}
              bottomOffset="20%"
            />
            <Contact />
          </MainSection>
        </Parallax>
      </div>
    );
  }
}

export default App;



