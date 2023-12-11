import React from "react";
import { Album } from "../consts/apiTypes";

interface AlbumPageProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageProps> = ({album}) => {
  return (
    <div>
      <h1>{album.title}</h1>
      <p>{album.artistName}</p>
      <img src={album.coverImage} alt={`Cover of ${album.title}`} />
    </div>
  );
};

export default AlbumPage;
