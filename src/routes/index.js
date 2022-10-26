import AppLayout from '../shared/appLayout';
import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/notFoundPage';
import TownPage from '../pages/townPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/in/:town',
        element: <TownPage />
      }
    ]
  }
]);

export default router;
