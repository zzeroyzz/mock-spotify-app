import React from "react";
import Categories from "./Categories"
import { Switch,Route } from "react-router-dom";
import PlaylistPages from "./pages/PlaylistPages";

const Main = () =>{
return(
    <div className="main">
   <div className="navHeader"></div>
   <div className="mainContent">
     <Switch>
       <Route path="/"exact component={Categories}></Route>
       <Route path="/search">Search</Route>
       <Route path="/yourlibrary">Your Library</Route>
      <Route path="/playlist/:id" component={PlaylistPages}></Route>
     </Switch>
 
   </div>
  </div>
)
}

export default Main;