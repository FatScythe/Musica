import { useParams } from "react-router-dom";
import SearchDesktop from "../Searchdesktop";
import { useContext } from "react";

import icon from "../../../images/collection_icon.png";
import icon2 from "../../../images/play.png";
import List from "./List";

const Playlist = ({ MusicaContext }) => {
  const MusicaData = useContext(MusicaContext);
  const { id } = useParams();

  const {
    playlist,
    playlistPending,
    playlistError,
    newreleases,
    trackList,
    setTrackList,
    setTrackIndex,
    loadTrack,
    playTrack,
  } = MusicaData;

  let data = playlist.filter((datum) => datum.id === id);

  // Getting index for each playlist
  let playlistIndex = parseInt(id.substr(9) - 1);

  return (
    <div className='playlist'>
      {playlistPending && (
        <h1 className='text-6xl text-secondary'>Loading...</h1>
      )}
      {playlistError && <h1 className='text-6xl text-secondary'>Error...</h1>}
      {playlist && (
        <>
          <SearchDesktop />
          <header>
            <div className='hero-img'>
              <img src={data[0].cover} alt={data[0].title} />
            </div>

            <div className='hero-txt'>
              <h1>{data[0].title}</h1>
              <p className='mt-2 text-xss'>{data[0].info}</p>
              <p className='font-semibold mb-8'>
                {data[0].files.length} songs - duration
              </p>

              <div className='btn'>
                <div className='flex bg-darkglass px-3 py-2 rounded-2xl'>
                  <button>
                    <img
                      className='inline w-4 h-4 mx-1'
                      src={icon2}
                      alt='play-all'
                    />

                    <span className='text-xss'>Play all</span>
                  </button>
                </div>

                <div className='flex bg-darkglass px-3 py-2 rounded-2xl'>
                  <button>
                    <img
                      src={icon}
                      className='inline w-5 h-5 mx-1'
                      alt='Add to collection'
                    />
                    <span className='text-xss'>Add to collection</span>
                  </button>
                </div>

                <div className='bg-darkglass cursor-pointer px-3 py-2 rounded-full md:p-2'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline  mx-1'
                  >
                    <path
                      d='M4.51981 0.666973C4.93981 0.679746 5.34647 0.75308 5.74047 0.88708H5.77981C5.80647 0.899746 5.82647 0.913746 5.83981 0.926413C5.98714 0.973746 6.12647 1.02708 6.25981 1.10041L6.51314 1.21375C6.61314 1.26708 6.73314 1.36641 6.79981 1.40708C6.86647 1.44641 6.93981 1.48708 6.99981 1.53308C7.74047 0.96708 8.63981 0.660413 9.56647 0.666973C9.98714 0.666973 10.4071 0.726413 10.8065 0.860413C13.2671 1.66041 14.1538 4.36041 13.4131 6.72041C12.9931 7.92641 12.3065 9.02708 11.4071 9.92641C10.1198 11.1731 8.70714 12.2797 7.18647 13.2331L7.01981 13.3337L6.84647 13.2264C5.32047 12.2797 3.89981 11.1731 2.60047 9.91975C1.70714 9.02041 1.01981 7.92641 0.593141 6.72041C-0.160192 4.36041 0.726474 1.66041 3.21381 0.846413C3.40714 0.779746 3.60647 0.73308 3.80647 0.70708H3.88647C4.07381 0.679746 4.25981 0.666973 4.44647 0.666973H4.51981ZM10.4598 2.77375C10.1865 2.67975 9.88647 2.82708 9.78647 3.10708C9.69314 3.38708 9.83981 3.69375 10.1198 3.79308C10.5471 3.95308 10.8331 4.37375 10.8331 4.83975V4.86041C10.8205 5.01308 10.8665 5.16041 10.9598 5.27375C11.0531 5.38708 11.1931 5.45308 11.3398 5.46708C11.6131 5.45975 11.8465 5.24041 11.8665 4.95975V4.88041C11.8865 3.94641 11.3205 3.10041 10.4598 2.77375Z'
                      fill='red'
                    />
                  </svg>
                  <span className='text-xss md:hidden'>Like</span>
                </div>
              </div>
            </div>
          </header>

          <main className='mt-8 mb-32'>
            {data[0].files.map((file, index) => {
              const { id, title, cover, duration, artist } = file;
              return (
                <List
                  loadTrack={loadTrack}
                  index={index}
                  playTrack={playTrack}
                  key={id}
                  duration={duration}
                  playlist={playlist}
                  title={title}
                  cover={cover}
                  artist={artist}
                  playlistIndex={playlistIndex}
                />
              );
            })}
          </main>
        </>
      )}
      ;
    </div>
  );
};

export default Playlist;
