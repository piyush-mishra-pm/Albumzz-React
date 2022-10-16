import React from "react";
import { Router, Route } from "react-router-dom";

import AlbumCreate from "./albums/AlbumCreate";
import AlbumEdit from "./albums/AlbumEdit";
import AlbumDelete from "./albums/AlbumDelete";
import AlbumList from "./albums/AlbumList";
import AlbumShow from "./albums/AlbumShow";
import Header from "./Header";
import history from "../history";

import "./App.css";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={AlbumList} />
          <Route path="/albums/show" exact component={AlbumShow} />
          <Route path="/albums/create" exact component={AlbumCreate} />
          <Route path="/albums/edit/:id" exact component={AlbumEdit} />
          <Route path="/albums/delete/:id" exact component={AlbumDelete} />
        </div>
      </Router>
    </div>
  );
}

export default App;
