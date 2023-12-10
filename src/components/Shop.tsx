import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import usePersistedState from '../hooks/usePersistedState';
import { ApiData, Album } from '../consts/apiTypes';
import Header from './Header';
import AlbumCard from './AlbumCard';

const url = `/discogs/users/ryanmcentire/collection/folders/0/releases`;
const fetchOptions: RequestInit = {
  mode: 'cors',
  headers: {
    Authorization: `Discogs key=${import.meta.env.VITE_API_KEY}, secret=${
      import.meta.env.VITE_API_SECRET
    }`,
    'User-Agent': 'bassbook/0.1',
  },
};
const Shop: React.FC = () => {
  const fetchResult = useFetch<ApiData>(url, fetchOptions);
  const [albums, setAlbums] = usePersistedState<Album[]>('albumList', []);

  useEffect(() => {
    if (fetchResult.data && fetchResult.data.releases) {
      const formattedAlbums = fetchResult.data.releases.map((release) => {
        const artistNames = release.basic_information.artists
          ? release.basic_information.artists
              .map((artist) => artist.name)
              .join(', ')
          : 'Unknown Artist';

        return {
          title: release.basic_information.title,
          artistName: artistNames,
          coverImage: release.basic_information.cover_image,
        };
      });
      setAlbums(formattedAlbums);
    }
  }, [fetchResult.data, setAlbums]);

  if (fetchResult.error)
    return <p>There is an error: {fetchResult.error.message}</p>;
  if (!albums || albums.length === 0) return <p>Loading...</p>;
  return (
    <div className="">
      <Header />
      <div className="mt-3 flex justify-center text-cream ">
        <h1 className="text-5xl font-extrabold font-asap ">featured albums</h1>
      </div>
      <div className="flex flex-wrap justify-center max-w-6xl m-auto">
        {albums.map((album) => (
          <AlbumCard
            key={album.title}
            albumName={album.title}
            artistName={album.artistName}
            albumPicture={album.coverImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
