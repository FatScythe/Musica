import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='grid place-items-center mt-20 md:mt-40'>
      <p className='text-red-500 text-3xl'>Not Found : )</p>
      <Link to='/'>
        <button className='bg-secondary px-2 py-1 text-sm rounded-md mt-7'>
          Go back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
