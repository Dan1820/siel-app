import React from "react";

function GamesDisplay({ game }) {
  return (
    <div className="container">
      <div className="">
        <p>{game["GAME NO."]} </p>

        <h2>{game["HOME"]}</h2>
        <p>Vs</p>
        <h2>{game["AWAY"]}</h2>
      </div>
      <div>
        <p>Conference: {game["CONFERENCE"]}</p>
        <p>Day: {game["DAY"]}</p>
        <p>Date: {game["DATE"]}</p>
        <p>Time: {game["TIME"]}</p>
        <p>Court: {game["COURT"]}</p>
        <p>Location: {game["LOCATION"]}</p>
      </div>
    </div>
  );
}

export default GamesDisplay;
