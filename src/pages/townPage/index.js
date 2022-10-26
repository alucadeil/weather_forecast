import { useParams } from 'react-router-dom';

const TownPage = () => {
  const { town } = useParams();
  return (
    <>
      <div>{town}</div>
    </>
  );
};

export default TownPage;
