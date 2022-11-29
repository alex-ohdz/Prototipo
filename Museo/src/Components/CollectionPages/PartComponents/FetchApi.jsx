import { useEffect, useState } from "react";

export const FetchApi = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setPicture(data.results);
    };

    fetchData();
  }, []);
  
};
