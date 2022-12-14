const NewReleases = ({
  loadTrack,
  cover,
  title,
  artist,
  index,
  newreleases,
  playTrack,
}) => {
  const playThis = () => {
    loadTrack(newreleases, index, cover, artist, title);
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

export default NewReleases;
