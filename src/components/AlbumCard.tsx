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
    <div className="w-80 m-4 p-4 border-4 border-cream bg-lilac rounded-xl hover:scale-105 ease-in-out duration-200 shadow-[0px_4px_0px_2px_rgba(204,199,179,1)]">
      <img src={albumPicture} alt={`Cover of ${albumName}`} />
      <div className="flex flex-col items-center text-cream font-bold">
        <div className="text-3xl">{artistName}</div>
        <div>{albumName}</div>
      </div>
    </div>
  );
};

export default AlbumCard;
