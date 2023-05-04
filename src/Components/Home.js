import React, { useEffect, useState } from "react";
import GamesDisplay from "./GamesDisplay";

function Home() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  return (
    <div>
      {games.map((game) => (
        <GamesDisplay key={game["GAME NO."]} game={game} />
      ))}
    </div>
  );
}

export default Home;
