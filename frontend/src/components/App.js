import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import AlbumCreate from './albums/AlbumCreate';
import AlbumEdit from './albums/AlbumEdit';
import AlbumDelete from './albums/AlbumDelete';
import AlbumList from './albums/AlbumList';
import AlbumShow from './albums/AlbumShow';

import './App.css';

function App() {
  return (
    <div>
      Albumzz

      <BrowserRouter>
      <div>
        <Route path="/" exact component={AlbumList} />
        <Route path="/albums/show" exact component={AlbumShow} />
        <Route path="/albums/create" exact component={AlbumCreate} />
        <Route path="/albums/edit" exact component={AlbumEdit} />
        <Route path="/albums/delete" exact component={AlbumDelete} />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
 