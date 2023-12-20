import React, { useEffect, useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import AlbumPage from './components/AlbumPage';
import { Album } from './consts/collectionApiTypes';

const Router: React.FC = () => {
  const [albumList, setAlbumList] = useState<Album[]>([]);

  useEffect(() => {
    const cachedData = localStorage.getItem('albumList');
    const albums = cachedData ? JSON.parse(cachedData) : [];
    setAlbumList(albums);
  }, []); 

  const router = useMemo(() => {
    const dynamicRoutes = albumList.map((album) => ({
      path: `/album/${album.id}`,
      element: <AlbumPage album={album} />,
    }));

    return createBrowserRouter([
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      ...dynamicRoutes,
    ]);
  }, [albumList]); 

  return <RouterProvider router={router} />;
};

export default Router;
