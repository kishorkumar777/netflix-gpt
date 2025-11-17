import { useSelector } from "react-redux";
import useTrailerVideo from "../customhooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const video = useSelector((store) => store.movies.bgTrailerVideo);
  useTrailerVideo(id);
  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1&loop=1&playlist=${video?.key}`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
