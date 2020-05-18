import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import Body from "./components/Body";
import Player from "./components/Player";
import "./styles.css";

const allTunes = require("./data/allTunes.json");

export default function App() {
  const [loading, setLoading] = useState(true);

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [title, setTitle] = useState();
  const [goHome, setGoHome] = useState(true);

  const [playList, setPlayList] = useState();
  const [tuneIndex, setTuneIndex] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTitleChange = page => {
    setTitle(page);
  };

  const handleGoHome = bool => {
    setGoHome(bool);
  };

  const handleTuneClick = (tunesList, index) => {
    setPlayList(tunesList);
    setTuneIndex(index);
  };

  const handleShowSearchBox = bool => {
    setShowSearchBox(bool);
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="App">
      <Header
        title={title}
        handleGoHome={handleGoHome}
        handleShowSearchBox={handleShowSearchBox}
      />

      <Body
        allTunes={allTunes}
        handleTuneClick={handleTuneClick}
        handleTitleChange={handleTitleChange}
        handleGoHome={handleGoHome}
        goHome={goHome}
        showSearchBox={showSearchBox}
        handleShowSearchBox={handleShowSearchBox}
      />

      <Player
        playList={playList}
        tuneIndex={tuneIndex}
        handleShowSearchBox={handleShowSearchBox}
      />
    </div>
  );
}
