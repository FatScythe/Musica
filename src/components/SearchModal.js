const SearchModal = ({
  searchResult,
  searchModal,
  handleCloseModal,
  loadTrack,
  playTrack,
}) => {
  return (
    <div
      className={`search-modal py-14 px-6 mx-4 rounded z-40 ${
        searchModal ? "absolute" : "hidden"
      } top-16 md:top-16 left-0 right-0 bottom-0 bg-dark text-light`}
    >
      <div className='cursor-pointer h-fit mb-20' onClick={handleCloseModal}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2.5}
          stroke='currentColor'
          className='w-10 h-10 float-right border-2 border-secondary rounded-full'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
      <ul className='flex justify-center flex-wrap gap-5'>
        {searchResult.map((result, index) => {
          const { artist, title, id, cover, duration } = result;
          const playThis = () => {
            loadTrack(searchResult, index, cover, artist, title);
            playTrack();
            handleCloseModal();
          };
          return (
            <li key={id} className='cursor-pointer' onClick={playThis}>
              <ModalCard
                cover={cover}
                title={title}
                artist={artist}
                duration={duration}
              />
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

const ModalCard = ({ cover, title, artist, duration }) => {
  return (
    <div className='flex flex-col justify-center self-center'>
      <div>
        <img className='w-36 h-36' src={cover} alt={artist} />
      </div>
      <div className='mt-2 text-xs w-fit text-center mr-auto ml-auto text-secondary'>
        <div className=''>{artist}</div>
        <div>{title}</div>
        <div className='text-dark2'>{duration}</div>
      </div>
    </div>
  );
};

export default SearchModal;
