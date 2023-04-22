import React from 'react';
import axios from 'axios';

const SelectedCharacter = ({characters, currChar}) => {
  return (
    <div className={characters[currChar - 1] !== undefined ? "selected-character" : "hidden"}>
      hi.
    </div>
  );
}

export default SelectedCharacter;