import React, { useEffect, useState } from "react";


function Joke() {
    const initialJokes = {
        available: 1,
        jokes: [
          {
            id: 123,
            joke: "lol code not working, im crazy",
          },
        ],
      };
    
      const [jokesData, setJokesData] = useState(initialJokes);

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
        } catch (error) {
            console.error(error);
        }
      }

      useEffect(() => {
        const fetchData = async () => {
          // const data = await fetchMeme();
          const result = await fetchJoke();
          // setMeme(data);
          setJokesData(result);
        };
    
        fetchData();
      }, []);
      
      
  return (
    <div>
      
    </div>
  )
}

export default Joke
