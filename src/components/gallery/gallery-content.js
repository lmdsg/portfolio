import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollLock from 'react-scrolllock';

export default class GalleryContent extends Component {
  img = React.createRef();

  componentDidMount() {
    this.props.content.imgDimensions = this.imgDimensions;
  }

  imgDimensions = () => {
    return this.img.current.getBoundingClientRect();
  }

  render() {
    const { src, active, className, closeModal, children } = this.props;

    return (
      <Portal>
        {active ? <ScrollLock accountForScrollbars={false} /> : ''}
        <div className={`gallery__content ${className}`}>
          <div className="gallery__content-intro">
            <div onClick={closeModal} className="gallery__content-close">close</div>
            <img onLoad={this.onImgLoad} ref={this.img} src={src} alt="" />
          </div>
          {/* <div className="container">
            <h4>Lorem</h4>
            <p>
              lorem
            </p>
          </div> */}
          {children}
        </div>
      </Portal>
    );
  }
}



const rootDOM = document.getElementById('root');

const Portal = ({ children, active }) => {
  return ReactDOM.createPortal(
    children,
    rootDOM
  )
}
