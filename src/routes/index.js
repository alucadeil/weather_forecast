import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/notFoundPage';
import TownPage from '../pages/townPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/in',
    element: <TownPage />
  }
]);

export default router;
