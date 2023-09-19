import {useState, useEffect} from "react";

function Residentes(props){
    const [data, setData] = useState([]);

    // props.residentes -> va a ser una lista
    // de residentes, por tanto, deberiamos 
    // hacer un map para ir recorriendo.

    useEffect(function(){
        Promise.all(props.residentes.map(
            url=>fetch(url)))
            .then(respuesta=>Promise.all(respuesta.map(res=>res.json()))).then(res=>{setData(res);
    })
    }, [props.residentes]);

    const personajes = data.map(function (personajes){
        return <h4>{personajes.name}</h4>
    })

    return <div>{personajes}</div>
}

export default Residentes;