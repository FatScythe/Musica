const Popular = ({
  loadTrack,
  cover,
  title,
  artist,
  index,
  popular,
  playTrack,
}) => {
  const playThis = () => {
    loadTrack(popular, index, cover, artist, title);
    playTrack();
  };
  return (
    <div className='mb-5 cursor-pointer' onClick={playThis}>
      <div className='card-img'>
        <img src={cover} alt={title} />
      </div>
      <p className='ml-2'>{title}</p>
    </div>
  );
};

export default Popular;
