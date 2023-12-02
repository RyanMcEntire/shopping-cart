import Header from './Header';
import AlbumCard from './AlbumCard';
import { useState } from 'react';

const Shop = () => { // TODO album list props
  const [albums, setAlbums] = useState([]);

  // TODO 
  // set the albums 
  return (
    <>
      <Header />
      Shop
      <div>
        {albums.map((card) => {
          <AlbumCard />
        })}
      </div>
    </>
  );
};

export default Shop;
