import React from 'react';
import logo from './logo.svg';
import './App.css';

import UsersList from './components/TrackList/TrackList';

function App(){
    return (
      <div className="App">
        <div className="wrapper">
            <UsersList/>
        </div>
      </div>
    );
}

export default App;
