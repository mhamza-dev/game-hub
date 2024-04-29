import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, errors } = useGames;

  return <>
    {errors && <p>{errors}</p>}
    
  </>;
};

export default GamesGrid;
