import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchParent = () => {
  return (
    <div>
      <img
        src={BG_IMG}
        alt="background"
        className="h-full w-full object-cover fixed -z-10"
      />
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearchParent;
