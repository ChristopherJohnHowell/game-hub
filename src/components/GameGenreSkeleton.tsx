import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGenreSkeleton = () => {
  const genresForSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <List marginY={"20px"}>
      {genresForSkeleton.map((cur) => (
        <ListItem key={cur}>
          <Skeleton
            marginBottom={3}
            height={"30px"}
            borderRadius={"10px"}
          ></Skeleton>
        </ListItem>
      ))}
    </List>
  );
};

export default GameGenreSkeleton;
