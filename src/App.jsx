import ComponenteReto from "./componentes/ComponenteReto.jsx";
import { useState, useEffect } from 'react'

function App() {
    const [name, setName] = useState("Perrito")
    const user = {apodo: "puchi", anios: 42}
    const [edad, setEdad] = useState(0)
    useEffect(()=>{
        console.log("soy use effect y me ejecuto")
    },[edad])

    const alerta = ()=>{
        alert("DALE LO ENTENDISTE?")
    }
    return ( <>
        
        <ComponenteReto seteo={setName} Txtbtn={"saludame papi"} alerta={alerta} {...user}></ComponenteReto>
    </> );
}

export default App;