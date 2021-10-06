import "./styles.css";

// import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";

import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import MorePage from "./pages/MorePage";
import DetailsPage from "./pages/DetailsPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import startApi from "./mockApi.js";

startApi();

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <TopNavigation /> */}
        <Switch>
          <Route component={ExplorePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
          <Route component={FavoritesPage} path="/favorites" />
          <Route component={MorePage} path="/more" />
          <Route component={DetailsPage} path="/recommended/places/:id" />
          <Route component={DetailsPage} path="/popular/places/:id" />
          <Route component={DetailsPage} path="/categories/:id" />
        </Switch>
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}
