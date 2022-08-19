import React from "react";

export const Tile = ({ data }) => {
  return (
    <div className="tile-container" key={data.title}>
    {
      Object.keys(data).map((key) => 
        key==="title" || key==="name" ? (
          <p className="tile-title">{data.title||data.name}</p>
        ) : (<p className="tile">{data[key]}</p>)
      )}
    </div>
  );
};
