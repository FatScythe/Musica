import heart from "../../images/Heart.png";

const TopCharts = ({
  title,
  artist1,
  artist2,
  duration,
  info,
  cover,
  files,
}) => {
  return (
    <div className='card-item'>
      <div className='flex justify-between min-w-xs md:min-w-full items-center md:ml-2 bg-dark3 px-4 py-2 rounded-lg'>
        <div className='flex flex-col md:flex-row justify-between gap-2 items-center'>
          <div className='self-start'>
            <img
              src={cover}
              className='object-cover w-20 h-20 rounded-md'
              alt={title}
            />
          </div>
          <div>
            <h2 className='text-normal'>{title}</h2>
            <p className='text-xs text-gray-500'>
              {artist1}, {artist2} ...
            </p>
            <p className='text-normal mt-5 md:mt-0'>{duration}</p>
          </div>
        </div>

        <div className='border border-gray-500 cursor-pointer rounded-full p-2'>
          <img className='object-cover' src={heart} alt='like' />
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
