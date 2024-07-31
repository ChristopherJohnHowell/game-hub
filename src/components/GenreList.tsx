import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <GameGenreSkeleton />;
  if (error) return <Text>Oops! {error}</Text>;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingBottom={1}>
            <HStack>
              <>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  textAlign={"left"}
                  whiteSpace={"normal"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
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
