import React, { useState, useEffect, useRef } from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { showNotification as show } from "./helpers/helpers";
import axios from "axios";

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [data, setData] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://restcountries-v1.p.rapidapi.com/all",
      headers: {
        "x-rapidapi-key": "efe031c959msh37e94e0755de054p1194b9jsn39969fb2892f",
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        changeSelectedWord(
          response.data[Math.floor(Math.random() * response.data.length)]?.name
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const selectedWordRef = useRef(selectedWord);
  const changeSelectedWord = (data) => {
    data = data.toLowerCase();
    selectedWordRef.current = data;
    setSelectedWord(data);
  };
  const handleKeydown = (event) => {
    const { key, keyCode } = event;
    if (playable && keyCode >= 65 && keyCode <= 90) {
      let letter = key.toLowerCase();
      if (selectedWordRef.current.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setwrongLetters((wrongLetters) => [...wrongLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  };
  useEffect(() => {
    getData();
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
    // eslint-disable-next-line
  }, []);

  let playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setwrongLetters([]);
    setSelectedWord(data[Math.floor(Math.random() * data.length)]?.name);
  };
  return (
    <div>
      <Header />
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Notification showNotification={showNotification} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </div>
  );
};

export default App;
