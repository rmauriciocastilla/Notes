import {Route,Switch} from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={Notes}/>
        <Route exact path="/create" component={NewNote}/>
        <Route exact path="/update/:id" component={UpdateNote}/>
        <Route exact path="/archive" component={ArchiveNotes}/> 
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
