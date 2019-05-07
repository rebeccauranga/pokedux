import React from 'react';
import './App.css';
import PokeList from './containers/PokeListContainer'
// import PokeList from './components/PokeList'

function App() {
  return (
    <div className="App">
      <h1>Pokemans</h1>
      <PokeList />
    </div>
  );
}

export default App;
