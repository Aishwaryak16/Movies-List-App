import React, { useRef } from "react";
import lang from "../Utils/LanguageConstants";
import { useSelector } from "react-redux";
import openai from "../Utils/OpenAI";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an API call to GPT API and get a Movie Results

    const gptQuery = 'Act as a Movie recommendation system abd suggest some movies for the query' + searchText.current.value + '. only give me names of 5 movies, comma separated like the example result given ahead. Example Result: KGF, Hera Pheri, Gadar, Sholey, Golmaal, Padosan';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);

    if(!gptResults.choices) {
      console.log(gptResults.choices?.[0]?.messages?.content);
    }
  };
  return (
    <div className="justify-content-center search-bar-container">
      <form className="search-form d-flex" onSubmit={handleClick}>
        <input
          ref={searchText}
          type="text"
          className="search-bar p-2 me-2 bg-light"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="btn btn-danger" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
