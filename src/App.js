import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { app_background } from "./data/markdown";

// import your custom data fetching function
// TODO: add a data fetching function to the api.js file in the endpoints folder
import { getAllBuffySeasons, getAllBuffyCast, getAllAngelSeasons, getAllAngelCast } from "./data/endpoints";

const App = () => {
  const [seasons, setSeasons] = useState(null);
  const [cast, setCast] = useState(null);
  const [angelSeasons, setAngelSeasons] = useState(null);
  const [angelCast, setAngelCast] = useState(null);

  /**
   * TODO: modify this useEffect to pass as many params as you want
   * - at minimum, pass your state setting function from above
   * - you could also create more state variables to handle multiple params for your endpoint / user input
   */
  useEffect(() => {
    if (!seasons) {
      // if our characters is null, fetch some data!
      getAllBuffySeasons(setSeasons);
    }
    // don't forget to add every state variable you're monitoring to this array!
    if (!cast) {
      getAllBuffyCast(setCast);
    }
    if (!angelSeasons) {
      getAllAngelSeasons(setAngelSeasons);
    }
    if (!angelCast) {
      getAllAngelCast(setAngelCast)
    }
  }, [seasons, cast, angelSeasons, angelCast]);

  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown className="background" source={app_background} />

        <h2><u>Buffy the Vampire Slayer Seasons</u></h2>
        <div className="container">
          {/**
           * Code explanation:
           * Feel free to delete this or modify this. It is creating a grid using Boostrap classes
           * - map has a 2nd parameter that tells you the elements index in the array, its good practice to pass this as the key prop
           * - remember to print to console the data you fetch, it will definitely have different properties & values than my data!
           */}
          <div className="row justify-content-md-center">
            {/**
             * - TODO: use a ternary to add conditional react elements
             * - in this case, if characters is null, it displays "No characters"
             * - otherwise, it maps through characters and renders info for each person!
             */}
            {seasons ? (
              seasons.map((season, idx) => (
                <div className="buffy-seasons" key={idx}>
                  {/* Displays name of each character */}
                  <h2 className="season-number">{"Season " + season.number}</h2>
                  {/* Displays image of each character + adds an additional class (character-img) so I can customize in my CSS file*/}
                  <img
                    src={season.image.original}
                    className="img-fluid character-img"
                    alt="season img"
                  ></img>
                  <h4 className="episodes">{"Episode Count: " + season.episodeOrder}</h4>
                  <h4 className="premiere">{"First Episode: " + season.premiereDate}</h4>
                  <h4 className="end">{"Last Episode: " + season.endDate}</h4>
                  <div className="season-summary">
                    {/* Displays list of each character's allies (stored in an array within the char object called allies) */}
                    <h3 className="summary">Season Summary</h3>
                    <p>{season.summary}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>No Seasons</div>
            )}
          </div>
        </div>
        <h2><u>Buffy the Vampire Slayer Cast</u></h2>
        <div className="container">
          <div className="row justify-content-md-center">
            {cast ? (
                  cast.map((castMember, idx) => (
                    <div className="buffy-cast" key={idx}>
                      <h2 className="person">{castMember.person.name}</h2>
                      <img
                        src={castMember.person.image.medium}
                        className="img-fluid character-img"
                        alt="cast img"
                      ></img>
                      <div className="character-description">
                        <h4 className="character">{castMember.character.name}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No Cast</div>
                )}
          </div>
        </div>
        <h2><u>Angel Seasons</u></h2>
        <div className="container">
          <div className="row justify-content-md-center">
            {angelSeasons ? (
                  angelSeasons.map((angelSeason, idx) => (
                    <div className="angel-seasons" key={idx}>
                      <h2 className="season-number"><span>{"Season " + angelSeason.number}</span></h2>
                      <img
                      src={angelSeason.image.medium}
                      className="img-fluid character-img"
                      alt="season img"
                      ></img>
                      <h4 className="episodes">{"Episode Count: " + angelSeason.episodeOrder}</h4>
                      <h4 className="premiere">{"First Episode: " + angelSeason.premiereDate}</h4>
                      <h4 className="end">{"Last Episode: " + angelSeason.endDate}</h4>
                      <div className="season-summary">
                        {/* Displays list of each character's allies (stored in an array within the char object called allies) */}
                        <h3 className="summary"><span>Season Summary</span></h3>
                        <p>{angelSeason.summary}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No Seasons</div>
                )}
          </div>
        </div>
        <h2><u>Angel Cast</u></h2>
        <div className="container">
          <div className="row justify-content-md-center">
            {angelCast ? (
                  angelCast.map((angelCastMember, idx) => (
                    <div className="angel-cast" key={idx}>
                      <h2 className="person"><span>{angelCastMember.person.name}</span></h2>
                      <img
                        src={angelCastMember.person.image.medium}
                        className="img-fluid character-img"
                        alt="cast img"
                      ></img>
                      <div className="character-description">
                        <h4 className="character">{angelCastMember.character.name}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No Cast</div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
