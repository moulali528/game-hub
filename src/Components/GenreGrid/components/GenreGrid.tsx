import React, { useEffect, useState } from "react";
import useGenre from "../../../hooks/useGenre";

const GenreGrid: React.FC = () => {
  const { genres, error, isLoading } = useGenre();
  console.log("genres--", genres, isLoading, error);

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreGrid;
