import { useEffect, useState } from "react";

export const ApiRest = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>Rick and Morty</div>
      {character.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};
