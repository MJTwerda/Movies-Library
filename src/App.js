import React from "react";

import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import DetailMovie from "./components/DetailMovie/DetailMovie";
import BodyMovies from "./components/BodyMovies/BodyMovies";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path ='/' component={BodyMovies} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" 
              render={({match}) => <DetailMovie idMovie={match.params.id} />} />
    </React.Fragment>
  );
}

export default App;
