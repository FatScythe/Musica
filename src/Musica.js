import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import Videos from "./components/Videos/Videos";
import Radio from "./components/Radio/Radio";
import Profile from "./components/Profie/Profile";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound";
import Playlist from "./pages/Playlist";
import RedirectHome from "./components/Redirect";
import Player from "./components/Home/Player";
import SearchDesktop from "./components/Home/Searchdesktop";
import SearchModal from "./components/SearchModal";

const Musica = ({ MusicaContext }) => {
  const MusicaData = useContext(MusicaContext);
  const {
    inputText,
    setInputText,
    handleInputText,
    searchResult,
    searchModal,
    handleCloseModal,
    loadTrack,
    playTrack,
  } = MusicaData;
  return (
    <div className='App'>
      <Router>
        <div className='md:grid md:grid-cols-12 relative'>
          <Navbar MusicaContext={MusicaContext} />
          <Player MusicaContext={MusicaContext} />
          <main className='md:col-span-11'>
            <SearchDesktop
              inputText={inputText}
              setInputText={setInputText}
              handleInputText={handleInputText}
            />
            <SearchModal
              searchResult={searchResult}
              searchModal={searchModal}
              handleCloseModal={handleCloseModal}
              loadTrack={loadTrack}
              playTrack={playTrack}
            />
            <Switch>
              <Route exact path='/'>
                <RedirectHome />
              </Route>
              <Route path='/home'>
                <Home MusicaContext={MusicaContext} />
              </Route>
              <Route path='/collection'>
                <Collection />
              </Route>
              <Route path='/videos'>
                <Videos />
              </Route>
              <Route path='/radio'>
                <Radio />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/logout'>
                <Logout />
              </Route>
              <Route path='/playlist/:id'>
                <Playlist MusicaContext={MusicaContext} />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Musica;
