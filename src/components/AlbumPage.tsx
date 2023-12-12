import { Album } from '../consts/collectionApiTypes';
import Header from './Header';
import { ReleaseApiData } from '../consts/releaseApiTypes';
import useFetch from '../hooks/useFetch';
import { useEffect, useMemo } from 'react';

interface AlbumPageProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album }) => {
  const url = useMemo(() => `/discogs/releases/${album.id}`, [album.id]);
  const fetchOptions: RequestInit = useMemo(
    () => ({
      mode: 'cors',
      headers: {
        Authorization: `Discogs key=${import.meta.env.VITE_API_KEY}, secret=${
          import.meta.env.VITE_API_SECRET
        }`,
        'User-Agent': 'bassbook/0.1',
      },
    }),
    []
  );

  const fetchResult = useFetch<ReleaseApiData>(url, fetchOptions);

  useEffect(() => {
    if (fetchResult.data) {
      console.log(fetchResult.data);
      // TODO: define info shape of useful data here and don't do it in JSX

    }
  }, [fetchResult.data]);

  const release = fetchResult.data;

  if (fetchResult.error)
    return <p>Album page Error: {fetchResult.error.message}</p>;
  if (!release) return <p>Loading album details...</p>;

  return (
    <>
      <Header />
      <div>
        <h1>{release.title}</h1>
        <p>{album.artistName}</p>
        <img src={album.coverImage} alt={`Cover of ${album.title}`} />
      </div>
    </>
  );
};

export default AlbumPage;
