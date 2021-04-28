import ImageGallery from 'react-image-gallery';

import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import { Fragment, useState } from 'react';


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
  console.log(item);
  const [page, setPage] = useState(0)
  return (
    <Fragment>
      <div className="page-buttons">Page {page + 1}/{item.pages.length}
        <button disabled={page === item.pages.length} onClick={e => setPage(page + 1)}>Next</button>
        <button disabled={page === 0} onClick={e => setPage(page - 1)}>Prev</button>
      </div>
      <div>
        <img src={item.pages[page].original} className="image-gallery-image" />
      </div>
    </Fragment>
  )
}


export default App;
