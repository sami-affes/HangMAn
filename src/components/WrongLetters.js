import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div>
    {wrongLetters.length > 0 && <p className="missed-word">You missed: </p>}
    <div className="wrong-letters-container">
        {wrongLetters
          .map((letter, i) => <span  key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      
    </div></div>
  );
};

export default WrongLetters;

