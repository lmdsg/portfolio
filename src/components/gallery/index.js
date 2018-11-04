import React, { Component } from 'react';
import GalleryItem from './gallery-item';

import MasonryLayout from 'react-masonry-layout'

import './index.min.css';

import img1 from '../../assets/gallery/1.jpg';
import img2 from '../../assets/gallery/2.jpg';
import img3 from '../../assets/gallery/3.jpg';
import img4 from '../../assets/gallery/4.jpg';
import img5 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.jpg';
import img7 from '../../assets/gallery/7.jpg';
import img8 from '../../assets/gallery/8.jpg';
import img9 from '../../assets/gallery/9.jpg';
import img10 from '../../assets/gallery/10.jpg';
import img11 from '../../assets/gallery/11.jpg';
import img12 from '../../assets/gallery/12.jpg';
const Test = (props) => <div>lorem ipsum</div>;
// const Test = (props) => {
//   return <div>asd</div>;
// }
// const Test = (props) => (
//   <div>
//     <h2></h2>
//   </div>;
// )

export default class Gallery extends Component {
  state = {
    perPage: 10,
    gallery: [
      {
        src: img12,
        children: <Test />,
      },
      {
        src: img11,
        children: <Test />,
      },
      {
        src: img10,
        children: <Test />,
      },
      {
        src: img9,
        children: <Test />,
      },
      {
        src: img8,
        children: <Test />,
      },
      {
        src: img7,
        children: <Test />,
      },
      {
        src: img6,
        children: <Test />,
      },
      {
        src: img5,
        children: <Test />,
      },
      {
        src: img4,
        children: <Test />,
      },
      {
        src: img3,
        children: <Test />,
      },
      {
        src: img2,
        children: <Test />,
      },
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
