import { useState } from "react";
import './App.css'

// app "globals" and utils
const baseurl = "https://www.amiiboapi.org/api/amiibo/?name=";

const loadXHR = (url, callback) => {
  // set up the connection
  let xhr = new XMLHttpRequest();
  // when the data loads, invoke the callback function and pass it the `xhr` object
  xhr.onload = e =>{
    callback(e.target);
  }

  xhr.open("GET", url);
  xhr.send();
};

const searchAmiibo = (name, callback) => {
  console.log(name);
  loadXHR( `${baseurl}${name}`, callback);
};

const App = () => {

  // parses the response text from the xhr request
  const parseAmiiboResult = xhr => {
    let json;
    // try to parse the string into a json object
    try{
      json = JSON.parse(xhr.responseText);

      // log out number of results (length of `json.amiibo`)
      console.log(`Number of results=${json.amiibo.length}`);
      
      // loop through `json.amiibo` and log out the character name
      for(let item of json.amiibo){
        handleResults(item);
      }
    }
    catch{
      console.log(new Error("Data was not in JSON format"));
    }
  };

  const [term, setTerm]  = useState("mario");
  const [results, getResults] = useState([]);

  const handleResults = e =>{
    e.preventDefault();
    results.push(e)
  }

  //searchAmiibo("mario", parseAmiiboResult);

  return <>
    <header>
      <h1>Amiibo Finder</h1>
    </header>
    <hr />
    <main>
      <button onClick={()=>searchAmiibo(term, parseAmiiboResult)}>Search</button>
      <label>
        Name: 
        <input onChange={e=>setTerm(e.target.value)} />
      </label>
      <ul>
        {results.map(amiibo => (
          <span key={amiibo.head + amiibo.tail} style={{color:"green"}}>
            <h4>{amiibo.name}</h4>
            <img 
              width="100" 
              alt={amiibo.character}
              src={amiibo.image}
            />
          </span>
        ))}
      </ul>
    </main>
    <hr />
    <footer>
      <p>&copy; 2023 Ace Coder</p>
    </footer>
  </>;
};

export default App;
