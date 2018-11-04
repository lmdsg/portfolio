import React, { Component } from 'react';

import cursorGreen from '../assets/cursor_green.png';
import cursorRed from '../assets/cursor_red.png';
import cursorBlue from '../assets/cursor_blue.png';

export default class FollowCircle extends Component {
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
