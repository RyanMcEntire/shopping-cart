import React from 'react';

interface AlbumCardProps {
  albumName: string;
  artistName: string;
  albumPicture: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  albumName,
  artistName,
  albumPicture,
}) => {
  return (
    <div className="w-80 m-4 p-4 border-4 border-cream bg-lilac rounded-xl">
      <img src={albumPicture} alt={`Cover of ${albumName}`} />
      <div className="flex flex-col items-center text-cream font-bold">
        <div>{albumName}</div>
        <div>{artistName}</div>
      </div>
    </div>
  );
};

export default AlbumCard;
