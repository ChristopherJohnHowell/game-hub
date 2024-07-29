import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGenreSkeleton = () => {
  const genresForSkeleton = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {genresForSkeleton.map((cur) => (
        <ListItem>
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
