import { useRef, useState, useContext } from "react";

import img from "../../images/nowPlayin.png";
//Loading_Error Components
import TCloader from "../Loaders/TCloader";
import NPloader from "../Loaders/NPloader";
import Error from "../Loaders/Error";

// Components
import SearchDesktop from "./Searchdesktop";
import CuratedPlaylist from "./Curated";
import TopCharts from "./Topcharts";
import NewReleases from "./New";
import Popular from "./Popular";
import Player from "./Player";
import { Link } from "react-router-dom";

//API
import useFetch from "../../hooks/useFetch";

const Home = ({ MusicaContext }) => {
  const MusicaData = useContext(MusicaContext);
  // console.log(MusicaData);

  const {
    img,
    playlist,
    playlistPending,
    playlistError,
    newreleases,
    newPending,
    newError,
    popular,
    popularPending,
    popularError,
    isPlaying,
    setIsPlaying,
    trackList,
    setTrackList,
    audioContainer,
    play_pauseContainer,
    volumeContainer,
    muteContainer,
    seekContainer,
    updateTimer,
    seekPosition,
    coverSrc,
    setCoverSrc,
    artist,
    setArtist,
    title,
    setTitle,
    trackIndex,
    setTrackIndex,
    trackVolume,
    setTrackVolume,
    loadTrack,
    seekTo,
    seekUpdate,
    setVolume,
    mute_unmute,
    playpauseTrack,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    shuffle,
    loop,
  } = MusicaData;

  return (
    <>
      <header className='px-5'>
        <SearchDesktop />

        <div className='grid md:grid-cols-12 gap-5 h-full'>
          <CuratedPlaylist />

          <div className='top-charts'>
            <h1>Top charts</h1>
            <div className='items'>
              {playlistPending && <TCloader />}
              {playlistError && <Error />}

              {playlist &&
                playlist.map((chart) => {
                  const { id, title, artist, duration, info, cover, files } =
                    chart;
                  return (
                    <>
                      <Link key={id} to={`/playlist/${id}`}>
                        <TopCharts
                          title={title}
                          artist1={files[0].artist}
                          artist2={files[1].artist}
                          duration={duration}
                          cover={cover}
                          files={files}
                        />
                      </Link>
                    </>
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
                const { id, title, cover, audio, artist, duration } = newR;
                return (
                  <NewReleases
                    loadTrack={loadTrack}
                    id={id}
                    index={index}
                    setTrackIndex={setTrackIndex}
                    trackList={trackList}
                    setTrackList={setTrackList}
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
                const { id, title, cover, audio, artist, duration } = pop;
                return (
                  <Popular
                    loadTrack={loadTrack}
                    id={id}
                    index={index}
                    setTrackIndex={setTrackIndex}
                    trackList={trackList}
                    setTrackList={setTrackList}
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
