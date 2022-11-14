import react from "react";
import "./modal.css"

const PokemonModal = ({ pokeData, toggleModal }) => {
    console.log(pokeData)
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <div class="modal-header">
                    <div class="modal-header-image">
                        <img src={pokeData.sprites.other.dream_world.front_default} alt={pokeData.name} />
                    </div>
                    <div className="modal-header-content">
                        <div className="modal-description">
                            <h3 className="modal-heading">{pokeData.name}</h3>
                            <hr className="seprator-line"/>
                            <h3 className="modal-pokemon-id">00{pokeData.id}</h3>
                            <hr className="seprator-line"/>
                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            perferendis suscipit officia recusandae, eveniet quaerat assumenda
                            id fugit, dignissimos maxime non natus placeat illo iusto!
                            Sapiente dolorum id maiores dolores? Illum pariatur possimus
                            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                            placeat tempora vitae enim incidunt porro fuga ea.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonModal;