import ImageGallery from 'react-image-gallery';
import PrismaZoom from 'react-prismazoom';
import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { Fragment, useRef, useState } from 'react';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    pages: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
      }
    ]
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    pages: [
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
      }
    ]
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    pages: [
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
      }
    ]
  },
];

const App = () => {
  return (
    <div className="App">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        renderItem={(item) => <Item item={item} />}
      />
    </div>
  );
}

const Item = ({ item }) => {
  const [page, setPage] = useState(0)
  const prismaRef = useRef()
  return (
    <Fragment>
      <div className="item">
        <div className="page-buttons">
          Page {page + 1}/{item.pages.length}
          <button disabled={page === item.pages.length} onClick={e => setPage(page + 1)}>Next</button>
          <button disabled={page === 0} onClick={e => setPage(page - 1)}>Prev</button>
          <button disabled={page === 0} onClick={e => setPage(page - 1)}>+</button>
        </div>
        <div className="item-image-container">
          <div className="item-image">
            <PrismaZoom ref={prismaRef} scrollVelocity={0.5}>
              <img src={item.pages[page].original} />
            </PrismaZoom>
          </div>
        </div>
      </div>
    </Fragment >
  )
}


export default App;
