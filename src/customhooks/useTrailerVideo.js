import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useTrailerVideo = (id) => {
  const bgTrailerVideo = useSelector(store=>store.movies.bgTrailerVideo);
  const dispatch = useDispatch();
  const getBackgroundVideo = async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS);
   const json = await data.json();
  //  console.log(json)

   const filterdata = json.results.filter(video => video.name === "Official Trailer");
   const trailer = filterdata[0];
  //  console.log(trailer.key);
   dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{
   !bgTrailerVideo && getBackgroundVideo();
  },[]);
}

export default useTrailerVideo;