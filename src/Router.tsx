import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './components/About';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'about',
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
