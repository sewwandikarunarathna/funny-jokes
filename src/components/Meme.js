import React from "react";

function Meme({ joke }) {

  return (
    <div className='jokes'>
      <div className="topic" title="topic">
        Let's Laugh :)
      </div>

      <blockquote>
       {(joke.joke)?(<h1>{joke.joke}</h1>):(<h1>Loading the description...</h1>)}

      </blockquote>
      
  

      {/* {jokesData.available ? (
        jokesData.jokes.map((joke) => (
          <div key={joke.id}>
            <h2>Joke ID: {joke.id}</h2>
            <p>Joke: {joke.joke}</p>
          </div>
        ))
      ) : (
        <h2>No jokes available.</h2>
      )} */}
    </div>
  );
}

export default Meme;
