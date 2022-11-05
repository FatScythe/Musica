const Error = () => {
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

export default Error;
