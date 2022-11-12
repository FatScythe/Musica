//Loading_Error Components
import { Error, NPloader, TCloader } from "../Loaders/Loaders";

// Components
import CuratedPlaylist from "./Curated";
import TopCharts from "./Topcharts";
import NewReleases from "./New";
import Popular from "./Popular";
import { Link } from "react-router-dom";

//Context
import { useGlobalContext } from "../../context/MusicaContext";

const Home = () => {
  const {
    playlist,
    playlistPending,
    playlistError,
    newreleases,
    newPending,
    newError,
    popular,
    popularPending,
    popularError,
    loadTrack,
    playTrack,
  } = useGlobalContext();

  return (
    <>
      <header className='px-5'>
        <div className='grid md:grid-cols-12 gap-5 h-full'>
          <CuratedPlaylist />

          <div className='top-charts'>
            <h1>Top charts</h1>
            <div className='items'>
              {playlistPending && <TCloader />}
              {playlistError && <Error />}

              {playlist &&
                playlist.map((chart) => {
                  const { id, title, duration, cover, files } = chart;
                  return (
                    <div key={id}>
                      <Link to={`/playlist/${id}`}>
                        <TopCharts
                          title={title}
                          artist1={files[0].artist}
                          artist2={files[1].artist}
                          duration={duration}
                          cover={cover}
                          files={files}
                        />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className='new-release'>
          <h1>New Releases</h1>
          <div className='items'>
            {newPending && <NPloader />}
            {newError && <Error />}
            {newreleases &&
              newreleases.map((newR, index) => {
                const { id, title, cover, artist } = newR;
                return (
                  <NewReleases
                    loadTrack={loadTrack}
                    id={id}
                    index={index}
                    newreleases={newreleases}
                    playTrack={playTrack}
                    key={id}
                    title={title}
                    cover={cover}
                    artist={artist}
                  />
                );
              })}
          </div>
        </div>

        <div className='popular'>
          <h1>Popular in your area</h1>
          <div className='items'>
            {popularPending && <NPloader />}
            {popularError && <Error />}
            {popular &&
              popular.map((pop, index) => {
                const { id, title, cover, artist } = pop;
                return (
                  <Popular
                    loadTrack={loadTrack}
                    index={index}
                    popular={popular}
                    playTrack={playTrack}
                    key={id}
                    title={title}
                    cover={cover}
                    artist={artist}
                  />
                );
              })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
