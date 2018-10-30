import React, { Component } from 'react';
import cursorGreen from './assets/cursor_green.png';
import cursorRed from './assets/cursor_red.png';
import cursorBlue from './assets/cursor_blue.png';
import lukasmussnig from './assets/lukasmussnig.jpg';
import twitterlogo from './assets/twitter-logo.svg';
import instagramlogo from './assets/instagram-logo.svg';
import linkedinlogo from './assets/linkedin-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100vh',}}>
        <FollowCircle />
        <div className="herosld">
          <div className="c c1"></div>
          <div className="c c2"></div>
          <div className="c c3"></div>
            <div className="subtitle st1">LMDSG
              <div className="subtitle st2">Lukas Mussnig<br />Design</div>
            </div>
        </div>

        <div className="arrow">
        </div>

        <div className="lmdsg">
        </div>

        <div className="introduction">
          <div className="thisisme"></div>
          <div className="introtxt">

            <span>Hello there! Welcome on my Portfolio.</span><br /><br />
            Hi, my name is Lukas and I am a Designer currently based in Carinthia, Austria.
            This is my appearence on the Web and I want to show off some Projects of mine.
            A bit further down I have made a list of said work.
            I love coming up with simple ideas and improving them to something more complex.<br />


          </div>
            <div className="circles">
              <div className="cir cir1"></div>
              <div className="cir cir2"></div>
              <div className="cir cir3"></div>
            </div>
        </div>

        <div className="projects">

        </div>

        <div className="social">
          <div className="scenter">
            <div className="c c1"><a href="https://twitter.com/lukas_mussnig" alt="Twitter" target="_blank" rel="noopener noreferrer"><img src={twitterlogo} /></a></div>
            <div className="c c2"><a href="https://www.instagram.com/yylukasyy/" alt="Instagram" target="_blank" rel="noopener noreferrer"><img src={instagramlogo} /></a></div>
            <div className="c c3"><a href="https://www.linkedin.com/in/lukas-mussnig-60334114a/" alt="LinkedIn" target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} /></a></div>
          </div>
        </div>

        <div className="footer">
          <img src/>
          <div>Made with &#10084; by myself. <br />
          Special thanks to Markus Mälzer, who helped me with coding my Portfolio.
          </div>
        </div>
      </div>
    );
  }
}


class FollowCircle extends Component {
  state = {
    color: '#fff',
    cursor: '',
    x: 0,
    y: 0,
  }

  componentDidMount() {
    this.getColor()
    this.body = document.querySelector('body');
    this.body.addEventListener('mousemove', this.handleMousemove);
  }

  handleMousemove = ({ clientX: x, clientY: y }) => {
    this.setState({
      x, y
    })
  }

  componentWillUnmount() {
    this.body.removeEventListener('mousemove', this.handleMousemove);
  }

  getColor = () => {
    const colors = [
      '#2effae',
      '#FF2E63',
      '#08D9D6'
    ]
    const cursor = [
      cursorGreen,
      cursorRed,
      cursorBlue
    ]
    const random = Math.floor((Math.random() * 3));
    this.setState({
      color: colors[random],
      cursor: cursor[random]
    });
  }

  render() {
    if(!this.state.color) return
    const { x, y, cursor, color } = this.state;
    return (
      <div className="circle"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          zIndex: 1000,
          marginLeft: '-20px',
          marginTop: '-20px',
          borderRadius: '50%',
          border: `2.5px solid ${color}`,
          pointerEvents: 'none',
          top: y,
          left: x,
          transition: '0.1s',
          cursor: `url(${cursor}), pointer`,
        }}
      ></div>
    );
  }
}

export default App;
