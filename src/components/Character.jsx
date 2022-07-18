import React, { useState } from "react"

const Character = ({ character }) => {
    
    function ternary(){
        if(character.status === "Dead") {
            return(
                <p> Dead ☠ </p>
            )
        }
        if(character.status === "Alive") {
            return(
                <p>  Alive ❤ </p>
            )
        }
        if(character.status === "unknown") {
            return( 
                <p>  Unknown ❔</p>
            )
            
        }
    }

    //Show More and Show Less

    const [show, setShow] = useState(false)
 

    function features() {
        return(
            <div className="container-info" style={{paddingLeft: "20px"}}>
            <p className="text-start ">  {character.species} </p>
            <p className="text-start">  {character.gender} </p>
            <p className="text-start">  {character.location.name} </p>
            </div>
        )
    }

    return(

        <div className="container mt-02 p-4">
                     <h2> {character.name} </h2>
                     {ternary()}
                    <img src={character.image} alt={character.name} className='image'/>
                    <div className="container p-3">
                        <button onClick={() => setShow(prev => !prev)} className='btn btn-primary'>
                    {show ? 'Hide' : 'Show More'}
                    </button>
                    {
                         show ? features() : null
                    }
                    </div>
                    
             
        </div>
    )
}


export default Character;