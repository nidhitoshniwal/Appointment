import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  
  return (
    <div>
      {props.data.map((data) => (
        <Tile data={data} key={data.name || data.title} />
      ))}
    </div>
  );
};
