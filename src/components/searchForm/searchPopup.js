import PropTypes from 'prop-types';

const SearchPopup = props => {
  const { data, isLoading, onClick } = props;

  const handleResultItemClick = item => {
    onClick && onClick(item);
  };

  return (
    <div
      className={
        'flex flex-col w-[400px] absolute top-[100%] left-0 bg-gray-100 rounded-b rounded-bl'
      }>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map(resultItem => (
          <div
            key={resultItem.id}
            className={'flex gap-4 py-2 px-4 border-b-[1px] last:border-none hover:cursor-pointer'}
            onClick={() => handleResultItemClick(resultItem)}>
            <div className={'flex gap-2 px-2'}>
              <div>{resultItem.name},</div>
              <div>{resultItem.country}</div>
            </div>
            <div className={'w-[65px]'}>{resultItem.temp} °C</div>
            <div>
              {resultItem.lat}, {resultItem.lon}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

SearchPopup.propTypes = {
  searchResult: PropTypes.array,
  isSearching: PropTypes.bool
};

export default SearchPopup;
