import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';
import AlbumPage from './components/AlbumPage';
import { Album } from './consts/collectionApiTypes';

const Router: React.FC = () => {
  const [routes, setRoutes] = useState<
    Array<{ path: string; element: JSX.Element }>
  >([]);

  useEffect(() => {
    const cachedData = localStorage.getItem('albumList');
    const albumList: Album[] = cachedData ? JSON.parse(cachedData) : [];

    const dynamicRoutes = albumList.map((album) => ({
      path: `/album/${album.id}`,
      element: <AlbumPage album={album} />,
    }));

    setRoutes(dynamicRoutes);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'shop',
      element: <Shop />,
    },
    ...routes,
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
