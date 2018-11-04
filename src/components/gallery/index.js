import React, { Component } from 'react';
import GalleryItem from './gallery-item';

import MasonryLayout from 'react-masonry-layout'

import './index.min.css';

import img1 from '../../assets/1.jpg';
const Test = (props) => <div>asd</div>;

export default class Gallery extends Component {
  state = {
    perPage: 10,
    gallery: [
      {
        src: img1,
        children: <Test />,
      }
    ]
  }
  componentDidMount() {
    setTimeout(() => {
      this.reloadMasonry()
    }, 300);
  }

  reloadMasonry = () => {
    const bricksInstance = this.instance.getBricksInstance();
    bricksInstance.pack()
  }


  loadItems = () => {
    this.setState({
      items: this.state.items.concat(Array(this.state.perPage).fill())
    });
  }


  render() {
    const { gallery } = this.state;
    return (
      <div className="gallery__container">
        <MasonryLayout
          id="masonry-layout"
          ref={instance => this.instance = instance}
          sizes={[
            {
              columns: 1,
              gutter: 20
            },
            {
              mq: '632px',
              columns: 2,
              gutter: 30
            },
            {
              mq: '970px',
              columns: 3,
              gutter: 30
            },
            {
              mq: '1270px',
              columns: 4,
              gutter: 30
            }
          ]}
          >
          {gallery.map(({src, children = '', active = false}, key) => (
            <GalleryItem
              reloadMasonry={this.reloadMasonry}
              key={key}
              src={src}
              active={active}
            >
              {children}
            </GalleryItem>
          ))}
        </MasonryLayout>
      </div>
    )
  }
}
