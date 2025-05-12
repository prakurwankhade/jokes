import React,{useState} from "react";
import Button from "./Button";
import './Jokes.css'

const Joke = () =>{
  const[Joke, setJoke] = useState("");

  const fetchApi = () =>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
       .then((res) => res.json())
       .then((data) => setJoke(data.joke));
  };
  return(
    <div className="joke">
       <Button callApi={fetchApi}/>
       <p style={{
        fontSize: "27px",
       }}>{Joke}</p>
    </div>

  )
  
}

export default Joke;