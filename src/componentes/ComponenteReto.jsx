import '../assets/css/App.css'
import { useState, useEffect } from 'react'

function ComponenteReto(){
    const [nombre, setNombre] = useState('Loquillo')
    //<nav><button onClick={alerta()}>Alerta</button></nav>
    // const alerta = ()=>{
    //     alert("DALE LO ENTENDISTE?")
    // }
    const saludar = (e)=>{
        console.log("hola como ta:", nombre)
        
    }
    const handleInput = (e)=>{
        setNombre(e.target.value)
        console.log(e.target.value)
        seteo(e.target.value)
    }
    const user = "Constanza"
    const [edad, setEdad] = useState(0)
    useEffect(()=>{
        console.log("soy use effect y me ejecuto")
    },[edad])

    
    return (
        <>
            
            <h1>Hola, {nombre}!</h1>
            <input type="text" onChange={handleInput} />
            <p>Gracias por visitar la pagina de {user}. Ha sido subida a GitHub con mucha paciencia.</p>
        </>
        
    )
}

export default ComponenteReto