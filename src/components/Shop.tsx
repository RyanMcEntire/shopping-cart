import Header from './Header';
import AlbumCard from './AlbumCard';
import { Link } from 'react-router-dom';
import { useAlbumData } from '../context/AlbumDataContext';

const Shop: React.FC = () => {
  const albums = useAlbumData();

  if (!albums || albums.length === 0) return <p>Loading...</p>;
  return (
    <div className="">
      <Header />
      <div className="mt-3 flex justify-center text-cream ">
        <h1 className="text-5xl font-extrabold font-asap ">featured albums</h1>
      </div>
      <div className="flex flex-wrap justify-center max-w-6xl m-auto">
        {albums.map((album) => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <AlbumCard
              key={album.title}
              albumName={album.title}
              artistName={album.artistName}
              albumPicture={album.coverImage}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
