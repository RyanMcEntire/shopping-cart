import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import useFetch from '../hooks/useFetch';
import { Album, ApiData } from '../consts/collectionApiTypes';
import usePersistedState from '../hooks/usePersistedState';

type AlbumDataProviderProps = {
  children: ReactNode;
};

const AlbumDataContext = createContext<Album[] | undefined>(undefined);

export const AlbumDataProvider: React.FC<AlbumDataProviderProps> = ({
  children,
}) => {
  const baseUrl = import.meta.env.PROD ? 'https://api.discogs.com' : '/discogs';
  const url = `${baseUrl}/users/ryanmcentire/collection/folders/0/releases`;

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

  const fetchResult = useFetch<ApiData>(url, fetchOptions);
  const [albums, setAlbums] = usePersistedState<Album[]>('albumList', []);

  useEffect(() => {
    if (fetchResult.data && fetchResult.data.releases) {
      console.log(fetchResult);
      const formattedAlbums: Album[] = fetchResult.data.releases.map(
        (release) => {
          const artistNames = release.basic_information.artists
            ? release.basic_information.artists
                .map((artist) => artist.name)
                .join(', ')
            : 'Unknown Artist';

          return {
            id: release.id,
            title: release.basic_information.title,
            artistName: artistNames,
            coverImage: release.basic_information.cover_image,
            thumbnail: release.basic_information.thumb,
          };
        }
      );
      setAlbums(formattedAlbums);
    }
  }, [fetchResult, fetchResult.data, setAlbums]);

  return (
    <AlbumDataContext.Provider value={albums}>
      {children}
    </AlbumDataContext.Provider>
  );
};

export const useAlbumData = () => useContext(AlbumDataContext);
