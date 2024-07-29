import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); // Getting games from custom hook!
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={5}
      >
        {isLoading && skeletons.map((cur) => <GameCardSkeleton key={cur} />)}
        {games.map((cur) => (
          <GameCard key={cur.id} game={cur}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
