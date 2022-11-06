import React, { useState, useRef } from "react";
import Musica from "./Musica";

//API
import useFetch from "./hooks/useFetch";

//Image
import img from "./images/nowPlayin.png";

const MusicaContext = React.createContext();

const App = () => {
  const {
    data: playlist,
    pending: playlistPending,
    error: playlistError,
  } = useFetch("https://musica-api.up.railway.app/playlist");
  const {
    data: newreleases,
    pending: newPending,
    error: newError,
  } = useFetch("https://musica-api.up.railway.app/new");

  const {
    data: popular,
    pending: popularPending,
    error: popularError,
  } = useFetch("https://musica-api.up.railway.app/popular");

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackList, setTrackList] = useState([]);

  let audioContainer = useRef();
  let play_pauseContainer = useRef();
  let volumeContainer = useRef();
  let muteContainer = useRef();
  let seekContainer = useRef();
  let updateTimer;
  let seekPosition;

  const [coverSrc, setCoverSrc] = useState(img);
  const [artist, setArtist] = useState("James");
  const [title, setTitle] = useState("Seasons In");
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackVolume, setTrackVolume] = useState(1);

  const loadTrack = (list, index, cover, artist, title) => {
    audioContainer.current.src = list[index].audio;
    audioContainer.current.load();

    clearInterval(updateTimer);

    setTrackList(list);
    setTrackIndex(index);
    setCoverSrc(cover);
    setArtist(artist);
    setTitle(title);

    updateTimer = setInterval(seekUpdate, 1000);

    if (trackList) {
      let listIndex = list[index];
      audioContainer.current.addEventListener("ended", () => {
        playNextTrack(listIndex);
      });
    }
  };

  const playNextTrack = (listIndex) => {
    let newTrack = trackList.findIndex((x) => x.id === listIndex.id);
    if (newTrack < trackList.length - 1) {
      setCoverSrc(trackList[newTrack + 1].cover);
      setArtist(trackList[newTrack + 1].artist);
      setTitle(trackList[newTrack + 1].artist);
      audioContainer.current.src = trackList[newTrack + 1].audio;
      audioContainer.current.load();
      audioContainer.current.play();
    } else {
      setCoverSrc(trackList[0].cover);
      setArtist(trackList[0].artist);
      setTitle(trackList[0].artist);
      audioContainer.current.src = trackList[0].audio;
      audioContainer.current.load();
      playTrack();
    }
  };

  const seekTo = () => {
    if (audioContainer.current.src) {
      let seek_to =
        audioContainer.current.duration * (seekContainer.current.value / 100);
      audioContainer.current.currentTime = seek_to;
    }
  };
  const seekUpdate = () => {
    if (audioContainer.current.src) {
      if (!isNaN(audioContainer.current.duration)) {
        seekPosition =
          audioContainer.current.currentTime *
          (100 / audioContainer.current.duration);
        seekContainer.current.value = seekPosition;
      }
    }
  };

  const setVolume = () => {
    setTrackVolume(volumeContainer.current.value / 100);
    audioContainer.current.volume = trackVolume;
  };

  const playpauseTrack = (e) => {
    if (audioContainer.current.src) {
      if (!isPlaying) playTrack(e);
      else pauseTrack(e);
    }
  };

  const playTrack = () => {
    audioContainer.current.play();
    setIsPlaying(true);
    play_pauseContainer.current.innerHTML = `<svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}
                height='15'
                width='15'
              >
                <path
                  fill="#FFF"
                  fillRule='evenodd'
                  d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z'
                  clipRule='evenodd'
                />
              </svg>`;

    console.log("play");
  };

  const pauseTrack = () => {
    audioContainer.current.pause();
    setIsPlaying(false);
    play_pauseContainer.current.innerHTML = `<svg
              width='9'
              height='10'
              viewBox='0 0 9 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z'
                fill='#FFFFFF'
              />
            </svg>`;
  };

  const nextTrack = () => {
    if (audioContainer.current.src) {
      if (trackIndex < trackList.length - 1) {
        loadTrack(trackList, trackIndex + 1, coverSrc, artist, title);
        setCoverSrc(trackList[trackIndex + 1].cover);
        setArtist(trackList[trackIndex + 1].artist);
        setTitle(trackList[trackIndex + 1].title);
      } else {
        loadTrack(trackList, 0, coverSrc, artist, title);
        setCoverSrc(trackList[0].cover);
        setArtist(trackList[0].artist);
        setTitle(trackList[0].title);
      }
      playTrack();
    }
  };
  const prevTrack = () => {
    if (audioContainer.current.src) {
      if (trackIndex > 0) {
        audioContainer.current.src = "";
        loadTrack(trackList, trackIndex - 1, coverSrc, artist, title);
        setCoverSrc(trackList[trackIndex - 1].cover);
        setArtist(trackList[trackIndex - 1].artist);
        setTitle(trackList[trackIndex - 1].title);
      } else {
        loadTrack(trackList, trackList.length - 1, coverSrc, artist, title);
        setCoverSrc(trackList[trackList.length - 1].cover);
        setArtist(trackList[trackList.length - 1].artist);
        setTitle(trackList[trackList.length - 1].title);
      }
      playTrack();
    }
  };

  const mute_unmute = () => {
    if (muteContainer.current.classList.contains("mute")) {
      console.log("muted");
      audioContainer.current.muted = true;
      muteContainer.current.innerHTML = `<svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='#fff'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 border mute'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z'
            />
          </svg>`;
      muteContainer.current.classList.remove("mute");
    } else {
      console.log("unmuted");
      audioContainer.current.muted = false;
      muteContainer.current.innerHTML = `<svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='#000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z'
              fill='#EFEEE0'
            />
            <path
              d='M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z'
              fill='#EFEEE0'
            />
            <path
              d='M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z'
              fill='#EFEEE0'
            />
          </svg>`;

      muteContainer.current.classList.add("mute");
    }
  };

  const shuffle = () => {};
  const loop = () => {};
  return (
    <MusicaContext.Provider
      value={{
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
      }}
    >
      <Musica MusicaContext={MusicaContext} />
    </MusicaContext.Provider>
  );
};

export default App;
