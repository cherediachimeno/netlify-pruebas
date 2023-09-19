import Residentes from "./Residentes";
import {useState, useEffect} from "react";

const InfoPlaneta = (props) => {
    const [residentes, setResidentes] = useState([]);

    console.log(props);

  useEffect( () => {
    fetch(props.url)
    .then((res) => res.json())
    .then((res) =>{
      console.log(res);
      setResidentes(res.residents);
    })}, [props.url]);

    return <Residentes residentes={residentes}></Residentes>

}

export default InfoPlaneta;