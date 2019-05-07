import React from 'react';
import './App.css';
import PokeList from './containers/PokeListContainer'
import VisibilityButton from './containers/VisibilityButtonContainer';
import { statement } from '@babel/template';

function App() {
  return (
    <div className="App">
      <h1>Pokemans</h1>
      <VisibilityButton label={"click me fool"}/>
      {/* <VisibilityButton label={"caught"}/>
      <VisibilityButton label={"uncaught"}/> */}
      <PokeList />
    </div>
  );
}

export default App;
