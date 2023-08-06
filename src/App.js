import React, { useEffect, useState } from "react";
import Meme from "./components/Meme";
import Joke from "./components/Joke";

function App() {
  const [meme, setMeme] = useState({
    description: null,
    url: null,
  });

  // const initialJokes = {
  //   available: 1,
  //   jokes: [
  //     {
  //       id: 123,
  //       joke: "lol code not working, im crazy",
  //     },
  //   ],
  // };

  // const [jokesData, setJokesData] = useState(initialJokes);

  const [joke, setJoke] = useState(
    {
      joke: null,
    }
  );

  //fetching jokes from API
  const fetchJoke = async () => {
    // const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number
    const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d4a96e163mshf67df0a9d9622a5p1ac924jsn1661fbfd7ae9',
        'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  }

  //fetching memes from API
  const fetchMeme = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3d4a96e163mshf67df0a9d9622a5p1ac924jsn1661fbfd7ae9",
        "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://humor-jokes-and-memes.p.rapidapi.com/memes/random?keywords=rocket&number=3&media-type=image&keywords-in-image=false&min-rating=4",
      options
    );
    const data = await response.json();
    return data;
  };

  //creating new meme
  const createNewMeme = async () => {
    const data = await fetchMeme();
    setMeme(data);
  };

  //creating new joke
  const createNewJoke = async () => {
    const data = await fetchJoke();
    setJoke(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetchMeme();
      const result = await fetchJoke();
      // setMeme(data);
      setJoke(result);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Meme joke={joke} />
      {/* <Joke /> */}

      <button onClick={createNewJoke}>Go to a new joke!</button>
    </div>
  );
}

export default App;
