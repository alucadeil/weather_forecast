import Header from '../components/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center p-3 mx-auto w-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
