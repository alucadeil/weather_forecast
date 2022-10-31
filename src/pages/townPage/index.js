import { useCityData } from '../../hooks/useCityData';
import Weather from '../../components/weatherDashboard';
import SearchForm from '../../components/searchForm';
import { Link } from 'react-router-dom';

const TownPage = () => {
  const {
    initData,
    searchData,
    isInitLoading,
    isSearchLoading,
    isError,
    error,
    handleSearchButtonClick,
    handleCityClick
  } = useCityData();

  if (isInitLoading) return null;

  if (initData?.isError || isError)
    return (
      <div className={'flex flex-col gap-4 items-center'}>
        <div>{initData?.message || error?.data?.message}</div>
        <Link className={'p-2 rounded bg-gray-100'} to={'/'}>
          To Main
        </Link>
      </div>
    );

  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <SearchForm
        searchResult={searchData}
        isSearching={isSearchLoading}
        onSubmit={handleSearchButtonClick}
        onSearchResultClick={handleCityClick}
      />
      <Weather city={initData} forecastDaysCount={8} extended />
    </div>
  );
};

export default TownPage;
