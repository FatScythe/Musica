import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavCollection from "./Navcollection";
import MyCollection from "../../pages/MyCollection";
import Likes from "../../pages/Likes";

const Collection = () => {
  return (
    <Router>
      <div className='collection'>
        <div>
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
