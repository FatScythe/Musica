import songimg from "../../../images/R4.png";
const List = () => {
  return (
    <div className=' flex justify-between items-center mx-3 md:mx-12 rounded-lg mt-3 text-light bg-darkglass cursor-pointer'>
      <div className='flex gap-2 ml-2 items-center basis-3/5 md:basis-4/5'>
        <div className='flex items-center basis-1/4 md:basis-1/5 gap-2 my-1'>
          <img className='w-14 h-14' src={songimg} alt='song' />
          <svg
            width='18'
            height='16'
            viewBox='0 0 18 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='hidden md:block'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z'
              stroke='#EFEEE0'
              strokeWidth='0.625'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>

        <div className='flex flex-col items-start basis-3/4 md:basis-4/5 md:items-center md:flex-row md:justify-around'>
          <p>Let me love you- Krisx</p>
          <p>Single</p>
        </div>
      </div>

      <div className='flex mr-2 flex-col-reverse items-end md:items-center gap-2 md:flex-row md:justify-between basis-2/5 md:basis-1/5'>
        <p>5:07</p>
        <p className='text-bold rotate-90 font-semibold text-base text-secondary'>
          ...
        </p>
      </div>
    </div>
  );
};

export default List;
