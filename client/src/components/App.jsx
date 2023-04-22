import React from 'react';
import axios from 'axios';
import Character from './Character.jsx';
import CharacterList from './CharacterList.jsx';
import SelectedCharacter from './SelectedCharacter.jsx';

import characters from './../assets/characters.js';

const App = () => {
  // console.log(characters);
  const [currChar, setCurrChar] = React.useState(0);

  // React.useEffect(() => {
  //   console.log("We are just rerendering the page for the images.");
  // }, []);

  return (
    <div className="app">
      <p>
        Hello World! This is from the client.
      </p>
      <CharacterList characters={characters} currChar={currChar} setCurrChar={setCurrChar}/>
      <SelectedCharacter currChar={currChar} characters={characters}/>
    </div>
  );
}

export default App;