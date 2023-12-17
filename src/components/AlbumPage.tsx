import { Album } from '../consts/collectionApiTypes';
import Header from './Header';
import { Release, ReleaseApiData } from '../consts/releaseApiTypes';
import useFetch from '../hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import { youtubeUrls } from '../consts/albumData';

interface AlbumPageProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album }) => {
  const baseUrl = import.meta.env.PROD ? 'https://api.discogs.com' : '/discogs';
  const url = useMemo(() => `${baseUrl}/releases/${album.id}`, [album.id]);
  const [release, setRelease] = useState<Release | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
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
    } else if (fetchResult.error) {
      setErrorMessage('Failed to load album details. Please try again later.');
    }
  }, [fetchResult.data, fetchResult.error]);

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }
  if (!release) return <p>Loading album details...</p>;

  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto">
        <div className="m-4">
          <AwesomeButton
            className="h-12 w-20 m-1"
            type="secondary"
            onPress={() => navigate(-1)}
          >
            back
          </AwesomeButton>
        </div>

        <div className="flex flex-col m-6 md:flex-row-reverse justify-center gap-4">
          <div className="flex flex-col gap-4">
            <img
              className="m-2 rounded-2xl"
              src={release.album_art}
              alt={`Cover of ${album.title}`}
            />
            <iframe
              className="m-2 aspect-video rounded-xl"
              src={youtubeUrls[release.title as keyof typeof youtubeUrls]}
            ></iframe>
          </div>
          <div className="font-asap bg-water-blue rounded-xl p-4 m-2 text-cream ">
            <div className="p-2">
              <h1 className="font-bold text-4xl font-orbitron drop-shadow-md">
                {release.title}
              </h1>
              <p className="mb-4  drop-shadow-md">by {release.artist_name}</p>
            </div>
            <div className="bg-pale-muave text-lg rounded-lg p-4 text-slate-500">
              <p>
                Released:{' '}
                <span className="text-slate-600">{release.release_date}</span>
              </p>
              <p>
                Genre: <span className="text-slate-600">{release.genre}</span>
              </p>
              <p>
                Style: <span className="text-slate-600">{release.style}</span>
              </p>
              <p>
                Release Format:{' '}
                <span className="text-slate-600">{release.format}</span>
              </p>
              <p>
                Release Label:{' '}
                <span className="text-slate-600">{release.label}</span>
              </p>
            </div>
            <div className="mt-4">
              {release.track_list.map((track) => (
                <div className="">
                  <div className="flex justify-between gap-2">
                    <h3 className=" drop-shadow-md text-xl">
                      <span className=" drop-shadow-sm text-base bg-pale-muave text-slate-500 py-1 px-2 mr-1 rounded-full">
                        {track.type_} {track.position}{' '}
                      </span>{' '}
                      {track.title}
                    </h3>

                    {track.duration && (
                      <span className=" drop-shadow-md shrink-0">{` - ${track.duration}`}</span>
                    )}
                  </div>

                  <div className="my-1 border-b border-pale-muave"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumPage;
