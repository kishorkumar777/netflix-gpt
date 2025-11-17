import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);

  const query =
    "Act as a movie Recommendation system and suggest some movies for the query " +
    searchText?.current?.value +
    " only give me names of 5 movies comma seperated like the example result given ahead. Example result is Dungal, Don,Race3, Dude, Lokha";

  const fetchMovieFromTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    });
    // console.log(gptResults.choices[0].message.content);

    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map(movie=>fetchMovieFromTMDB(movie))

    const tmdbResults = Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults : tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 border border-white rounded-md text-white"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
