const NewReleases = ({ cover, title }) => {
  return (
    <div>
      <div className='card-img'>
        <img src={cover} alt={title} />
      </div>
      <p className='ml-2'>{title}</p>
    </div>
  );
};

export default NewReleases;
