import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import AlbumPage from './components/AlbumPage';
import { useAlbumData } from './components/AlbumDataContext';
import { Album } from './consts/collectionApiTypes';

const Router: React.FC = () => {
  const albums = useAlbumData();

  const router = useMemo(() => {
    const validAlbums = albums || [];

    const dynamicRoutes = validAlbums.map((album: Album) => ({
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
  }, [albums]);

  return <RouterProvider router={router} />;
};

export default Router;
