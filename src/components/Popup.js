import React,{useEffect} from 'react'
import {checkWin} from '../helpers/helpers'

const Popup = ({correctLetters,wrongLetters,setPlayable,selectedWord,playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congratulations! You won'
        playable = false;
    }else if(checkWin(correctLetters,wrongLetters,selectedWord) === 'lose') {
        finalMessage = 'You lost';
        finalMessageRevealWord = `....The word was : ${selectedWord}`;
        playable = false;
    }
    useEffect(() => setPlayable(playable))
    return (
        <div className="Game_over" style = {finalMessage !== '' ? {display : 'flex'} : {display : 'none'}}>
            <div>
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
            
        </div>
    )
}

export default Popup
