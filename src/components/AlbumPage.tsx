import { Album } from '../consts/collectionApiTypes';
import Header from './Header';
import { Release, ReleaseApiData } from '../consts/releaseApiTypes';
import useFetch from '../hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

interface AlbumPageProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album }) => {
  const url = useMemo(() => `/discogs/releases/${album.id}`, [album.id]);
  const [release, setRelease] = useState<Release | null>(null);
  const navigate = useNavigate();
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
      const albumRelease = fetchResult.data;

      const artistNames = albumRelease.artists
        ? albumRelease.artists
            .map((artist) => artist.name.replace(/\(\d\)/g, '').trim())
            .join(', ')
        : 'Unknown Artist';
      const labels = albumRelease.labels
        ? albumRelease.labels
            .map((label) => label.name.replace(/\(\d\)/g, '').trim())
            .join(', ')
        : 'Unknown Label';
      const formats = albumRelease.formats
        ? albumRelease.formats
            .map((format) =>
              format.descriptions
                ? format.descriptions.join(', ')
                : 'Unknown Description'
            )
            .join(', ')
        : 'Unknown Format';
      const genres = albumRelease.genres
        ? albumRelease.genres.join(', ')
        : 'Unknown Genre';
      const styles = albumRelease.styles
        ? albumRelease.styles.join(', ')
        : 'Unknown Style';
      const albumTracklist = albumRelease.tracklist
        ? albumRelease.tracklist.map((track) => ({
            position: parseInt(track.position),
            type_: track.type_,
            title: track.title,
            duration: track.duration,
          }))
        : [];

      const formattedRelease: Release = {
        id: albumRelease.id,
        title: albumRelease.title,
        artist_name: artistNames,
        label: labels,
        format: formats,
        release_date: albumRelease.released_formatted,
        genre: genres,
        style: styles,
        track_list: albumTracklist,
        album_art: albumRelease.images?.[0]?.resource_url || 'image not found',
      };

      setRelease(formattedRelease);
      console.log(fetchResult.data);
      console.log(formattedRelease);
    }
  }, [fetchResult.data]);

  if (fetchResult.error)
    return <p>Album page Error: {fetchResult.error.message}</p>;
  if (!release) return <p>Loading album details...</p>;

  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto">
        <div className="m-4">
          <AwesomeButton
            className="h-12 w-20 m-4"
            type="secondary"
            onPress={() => navigate(-1)}
          >
            back
          </AwesomeButton>
        </div>

        <div className="flex flex-col m-8 sm:flex-row-reverse justify-center">
          <div>
            <img
              className="m-2"
              src={release.album_art}
              alt={`Cover of ${album.title}`}
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl">{release.title}</h1>
            <p>by {release.artist_name}</p>
            <p>Released {release.release_date}</p>
            <p>Genre: {release.genre}</p>
            <p>Style: {release.style}</p>
            <p>Release Format: {release.format}</p>
            <p>Release Label: {release.label}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumPage;
