import {Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Notes from './components/Notes/Notes';
import NewNote from './components/NewNote/NewNote';
import UpdateNote from './components/UpdateNote/UpdateNote';
import ArchiveNotes from './components/ArchiveNotes/ArchiveNotes';

function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path="/" component={Notes}/>
      <Route path="/create" component={NewNote}/>
      <Route path="/update/:id" component={UpdateNote}/>
      <Route path="/archive" component={ArchiveNotes}/> 
    </div>
  );
}

export default App;
