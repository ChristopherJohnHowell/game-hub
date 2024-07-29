import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames(); // Getting games from custom hook!

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={5}
        spacing={3}
      >
        {games.map((cur) => (
          <GameCard key={cur.id} game={cur}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
