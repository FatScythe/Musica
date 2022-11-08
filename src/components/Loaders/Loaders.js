export const Error = () => {
  return (
    <div className='grid place-items-center bg-gray-300 h-52 w-full text-xs text-red-500 cursor-default rounded-lg'>
      <h1 className=' '>Error...</h1>
      <button
        onClick={() => window.location.reload()}
        className='border border-red-400 text-sm rounded-2xl py-2 px-4 bg-red-500 text-light hover:border-0 hover:text-dark hover:bg-secondary cursor-pointer'
      >
        Retry
      </button>
      <h1 className=''>Could not fetch data from server</h1>
    </div>
  );
};

export const TCloader = () => {
  return (
    <div className='bg-gray-500 h-52 md:h-40vh w-full rounded-2xl animate-pulse'></div>
  );
};

export const NPloader = () => {
  return (
    <div className='flex gap-5 mb-5'>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
      <div className='bg-gray-700 h-52  w-52 rounded-2xl animate-pulse'></div>
    </div>
  );
};
