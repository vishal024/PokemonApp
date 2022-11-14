import React,{useState} from 'react'
import PokemonModal from './PokemonModal';

const PokemonList = ({id, image, name, type, pokeData }) => {
    const [modal, setModal] = useState(false);
     const toggleModal = () =>{
         setModal(!modal)
     }
    const style = type + " thumb-container";
    // console.log(pokeData)
    return (
        <div className={style} onClick={toggleModal}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <small>#00{id}</small>
            {/* <small>Type: {type}</small> */}

            {
                modal && <PokemonModal pokeData={pokeData} toggleModal={toggleModal}/>
            }
        </div>
    )
}

export default PokemonList
