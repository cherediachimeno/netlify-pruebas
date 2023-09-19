import {useState, useEffect} from "react";
import InfoPlaneta from "./components/InfoPlaneta";

import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect( () => {
    fetch("https://swapi.dev/api/planets")
    .then((res) => res.json())
    .then((res) =>{
      console.log(res);
      setData(res.results);
    })}, []);

    function handleChange(e){
      setUrl("https://swapi.dev/api/planets/" + e.target.value);
    }

    const options=data.map(function(option, i){
      return <option value={i+1}>{option.name}</option>
    });

    return (
      <>
        <select onChange={handleChange}>{options}</select>
        <InfoPlaneta url={url}/>
      </>
    )



}

export default App
