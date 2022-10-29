import { useState } from "react";
//data
import { data } from "../../data/data";
import { data2 } from "../../data/data2";

// Components
import SearchDesktop from "./Searchdesktop";
import CuratedPlaylist from "./Curated";
import TopCharts from "./Topcharts";
import NewReleases from "./New";
import Player from "./Player";
import { Link } from "react-router-dom";

const Home = () => {
  const [charts, setCharts] = useState(data);
  const [newRel, setnewRel] = useState(data2);

  return (
    <>
      <header className='px-5'>
        <SearchDesktop />

        <div className='grid md:grid-cols-12 gap-5 h-full'>
          <CuratedPlaylist />

          <div className='top-charts'>
            <h1>Top charts</h1>
            <div className='items'>
              {charts.map((chart) => {
                const { id, title, artist, duration, cover } = chart;

                return (
                  <Link key={id} to={`/playlists/${id}`}>
                    <TopCharts
                      title={title}
                      artist={artist}
                      duration={duration}
                      cover={cover}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className='new-release'>
          <h1>New Releases</h1>
          <div className='items'>
            {newRel.map((newR) => {
              const { id, title, cover } = newR;
              return <NewReleases key={id} title={title} cover={cover} />;
            })}
          </div>
        </div>

        <div className='popular'>
          <h1>Popular in your area</h1>
          <div className='items'>
            {newRel.map((newR) => {
              const { id, title, cover } = newR;
              return <NewReleases key={id} title={title} cover={cover} />;
            })}
          </div>
        </div>

        <Player />
      </header>
    </>
  );
};

export default Home;
