const SearchDesktop = ({ inputText, setInputText, handleInputText }) => {
  return (
    <form className='mt-8 mb-4 search hidden md:block ml-4 text-light'>
      <svg
        className='inline mr-1'
        width='22'
        height='22'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z'
          stroke='white'
          strokeOpacity='0.25'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 14L11.1 11.1'
          stroke='white'
          strokeOpacity='0.25'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <input
        onChange={handleInputText}
        value={inputText}
        type='text'
        placeholder='Search'
        className='border border-transparent outline-none caret-secondary focus:border-b-primary bg-transparent w-3/4 placeholder:text-xs placeholder:tracking-wide placeholder:font-bold'
      ></input>
    </form>
  );
};

export default SearchDesktop;
