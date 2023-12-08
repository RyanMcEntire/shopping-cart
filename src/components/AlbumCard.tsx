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
    <div>
      <div>{albumName}</div>
      <div>{artistName}</div>
      <img src={albumPicture} alt={`Cover of ${albumName}`} />
    </div>
  );
};

export default AlbumCard;
