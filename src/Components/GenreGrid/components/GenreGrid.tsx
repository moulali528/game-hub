import React from "react";
import useGenre from "../../../hooks/useGenre";

const GenreGrid: React.FC = () => {
  const { data } = useGenre();

  return (
    <>
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreGrid;
