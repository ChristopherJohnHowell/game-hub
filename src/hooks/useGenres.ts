//import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// We return these three values so we don't negatively impact / break, any consumers of this function.
const useGenres = () => ({ data: genres, isLoading: false, error: null }); // useData<Genre>("/genres");

export default useGenres;
