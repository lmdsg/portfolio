import React, { Component } from 'react';
// import posed from 'react-pose';
import GalleryContent from './gallery-content';

const defaultAnimState = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
}

export default class GalleryItem extends Component {
  state = {
    // imgRotation: Math.floor(Math.random() * (10 - -10 + 1) + -10),
    imgRotation: 0,
    active: false,
    animating: false,
    pos: defaultAnimState,
    imgPos: defaultAnimState
  }
  body = document.body;
  docEl = document.documentElement;
  winsize = { width: window.innerWidth, height: window.innerHeight }
  item = React.createRef();
  content = {}

  onImgLoad = () => {
    this.setWidthHeight()
    setTimeout(() => {
      this.props.reloadMasonry();
    }, 100);
  }

  handleOnClick = (close) => (e) => {
    const { active, animating } = this.state;
    if(animating) return;
    if(active && !close) return;

    this.setState({
      ...this.handleAnim(),
      active: !active,
      animating: !animating
    }, () => {
      setTimeout(() => {
        this.setState({
          animating: animating
        })
      }, 620);
    })
  }
  setWidthHeight() {
    var { height, width } = this.item.current.getBoundingClientRect();
    this.setState({
      width,
      height
    })
  }

  handleAnim = () => {
    const { winsize, getSizePosition, item} = this;
    const { x, y, width, height } = item.current.getBoundingClientRect();
    const d = Math.hypot(this.winsize.width, this.winsize.height);
    const content = this.content.imgDimensions();

    return {
      pos: {
        scaleX: d/width,
        scaleY: d/height,
        x: -x,
        y: -y
      },
      imgPos: {
        scaleX: content.width / (width - 60),
        scaleY: content.height / (height - 60),
        x: content.x - x,
        y: content.y - y,
      }
    }
  }

  render() {
    const { src, children } = this.props;
    const { pos, imgPos, active, animating, height, width } = this.state;
    const className = active ? 'open' : 'closed';
    const anim = animating ? 'anim' : '';
    const bgStyles = {
      transform: active ?
        `translate(${pos.x}px, ${pos.y}px) scale(${pos.scaleX}, ${pos.scaleY})` :
        'translate(0, 0)',
    }
    // console.log(imgPos);
    const imgStyles = {
      transform: active ? `translate(${imgPos.x - 30}px, ${imgPos.y - 30}px) scale(${imgPos.scaleX}, ${imgPos.scaleY}) rotate(0deg)` : `translate(0, 0) rotate(${this.state.imgRotation}deg)`,
    }
    return (
      // active ? () => {} :
      <div
        onClick={this.handleOnClick(false)}
        className={`gallery__item ${className} ${anim}`}
        ref={this.item}
        style={{
          width,
          height
        }}
      >
        <div
          style={bgStyles}
          className={`gallery__item-bg `}
        />
        <div
          className="gallery__item-wrapper"
        >
          <div
            className="gallery__item-content">
            <img
              onLoad={this.onImgLoad}
              className="gallery__item-img"
              src={src} alt=''
              style={imgStyles}
            />
            <div className="gallery__item-text">

            </div>
          </div>
        </div>
        <GalleryContent
          {...this.props}
          active={active}
          className={className + ' ' + anim}
          content={this.content}
          closeModal={this.handleOnClick(true)}
        >{children}</GalleryContent>
      </div>
    );
  }
}
