import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import AlbumPage from './components/AlbumPage';
import { useAlbumData } from './context/AlbumDataContext';
import { Album } from './consts/collectionApiTypes';
import Cart from './components/Cart';
import Socials from './components/Socials';

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
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'socials',
        element: <Socials />,
      },
      ...dynamicRoutes,
    ]);
  }, [albums]);

  return <RouterProvider router={router} />;
};

export default Router;
