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
import Playlist from "./components/Home/Charts/Playlist";
import RedirectHome from "./components/Redirect";

const Musica = ({ MusicaContext }) => {
  return (
    <div className='App'>
      <Router>
        <div className='md:grid md:grid-cols-12 relative'>
          <Navbar />
          <main className='md:col-span-11 '>
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
