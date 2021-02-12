import React from 'react'
import bar from '../images/bar.png'
import barsmall from '../images/barsmall.png'
import head from '../images/head.png'
import neck from '../images/neck.png'
import corpus from '../images/corpus.png'
import rightarm from '../images/rightarm.png'
import leftarm from '../images/leftarm.png'
import righthand from '../images/righthand.png'
import lefthand from '../images/lefthand.png'
import rightleg from '../images/rightleg.png'
import leftleg from '../images/leftleg.png'
import rightfoot from '../images/rightfoot.png'
import leftfoot from '../images/leftfoot.png'

const Figure = ({wrongLetters}) => {
    const errors = wrongLetters.length
    return (
        <div className="testFigure">
            <div id="bar"><img src={bar} alt = "bar" className="responsive"/></div>
            <div id="barsmall"><img src={barsmall} alt = "barsmall" className="responsive"/></div>
            <div id="head" >{errors > 0 && <img src={head} alt = "head" className="responsive"/>}</div>
            <div id="neck" >{errors > 1 && <img src={neck} alt = "neck" className="responsive"/>}</div>
            <div id="corpus" >{errors > 2 && <img src={corpus} alt = "corpus" className="responsive"/>}</div>
            <div id="rightarm" >{errors > 3 && <img src={rightarm} alt = "rightarm" className="responsive"/>}</div>
            <div id="leftarm" >{errors > 4 && <img src={leftarm} alt = "leftarm" className="responsive"/>}</div>
            <div id="righthand" >{errors > 5 && <img src={righthand} alt = "righthand" className="responsive"/>}</div>
            <div id="lefthand" >{errors > 6 && <img src={lefthand} alt = "lefthand" className="responsive"/>}</div>
            <div id="rightleg" >{errors > 7 && <img src={rightleg} alt = "rightleg" className="responsive"/>}</div>
            <div id="leftleg" >{errors > 8 && <img src={leftleg} alt = "leftleg" className="responsive"/>}</div>
            <div id="rightfoot" >{errors > 9 && <img src={rightfoot} alt = "rightfoot" className="responsive"/>}</div>
            <div id="leftfoot" >{errors > 10 && <img src={leftfoot} alt = "leftfoot" className="responsive"/>}</div>
        </div>
    )
}

export default Figure
