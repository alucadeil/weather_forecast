import { Link, useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className={'flex flex-col gap-2 items-center'}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className={'p-2 rounded bg-gray-100'} to={'/'}>
        To Main
      </Link>
    </div>
  );
};

export default NotFoundPage;
