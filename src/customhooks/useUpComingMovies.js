
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies} from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {
  const upComingVideo = useSelector(store=>store.movies.upComingVideo);
  const dispatch = useDispatch();
  const getUpComingVideos = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
   const json = await data.json();
//    console.log(json)
   dispatch(addUpComingMovies(json.results));
  //  console.log(json.results)
  }

  useEffect(()=>{
    !upComingVideo && getUpComingVideos();
  },[]);
}

export default useUpComingMovies;