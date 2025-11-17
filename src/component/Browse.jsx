import Header from "./Header";
import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularVideo from "../customhooks/usePopularVideo";
import useTopRatedMovies from "../customhooks/useTopRatedMovies";
import useUpComingMovies from "../customhooks/useUpComingMovies";
import GptSearchParent from "./GptSearchParent";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularVideo();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchParent />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
