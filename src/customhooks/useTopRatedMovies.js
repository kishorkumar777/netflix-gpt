
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies, addTopRatedMovies} from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
  const topRatedVideo = useSelector(store=>store.movies.topRatedVideo);
  const dispatch = useDispatch();
  const getTopRatedVideos = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
   const json = await data.json();
//    console.log(json)
   dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
   !topRatedVideo && getTopRatedVideos();
  },[]);
}

export default useTopRatedMovies;