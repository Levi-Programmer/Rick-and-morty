import {useEffect, useState} from 'react'
import Character from './Character'


const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results)
        }
        fetchData()
    }, []);

    return(
        <div>
            <h1 className='text-primary' style={{marginTop: "50px", marginBottom: "50px"}}>Rick and Morty - Api</h1>
            <div className="row">
            {characters.map((character) => {
                return(
                    <div className='col-md-4'>
                    <Character character={character} key={character.id}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default CharacterList;