import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <GameGenreSkeleton />;
  if (error) return <Text>Oops! {error}</Text>;

  return (
    <>
      <List paddingY={"14px"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="md"
                  variant={"link"}
                  overflow={"hidden"}
                >
                  {genre.name}
                </Button>
              </>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
