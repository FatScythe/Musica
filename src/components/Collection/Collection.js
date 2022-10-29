import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavCollection from "./Navcollection";
import SearchDesktop from "../Home/Searchdesktop";
import MyCollection from "./MyCollection";
import Likes from "./Likes";

const Collection = () => {
  return (
    <Router>
      <div className='collection'>
        <div>
          <SearchDesktop />
          <NavCollection />
        </div>
        <main>
          <Switch>
            <Route path='/collection'>
              <MyCollection />
            </Route>

            <Route path='/likes'>
              <Likes />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Collection;
