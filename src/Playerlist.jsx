import React from "react";
import Player from "./Player";
import { joueurs } from "./Players";

const PlayersList = () => {
  return (
    <div className="bigdiv">
      {joueurs.map((joueur) => (
        <Player key={joueur.nom} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
