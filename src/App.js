import React, { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'

const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
   const [pokemonTypes, setPokemonTypes] = useState([])
   const [search, setSearch] = useState("");
   let pokeTypeData;

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    createPokemonObject(data.results)
    console.log(allPokemons)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }

    const typeRes = await fetch('https://pokeapi.co/api/v2/type')
    const typeData =await typeRes.json();
    pokeTypeData=typeData.results;
    console.log(typeData)
    console.log(pokeTypeData)
    
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
      <div className="header">
         <h1 className="header-text">Pokedex</h1>
         <hr className="seprator-line"/>
         <small className="poke-text">search for any pokemon that exist on the planet</small>
      </div>
      <div className="filter-form">
        <div style={{position:"absolute",display:"grid",top:"0%",left:"0%"}}>
            <label className="label-text">Search by</label>
            <input className="filter-input" type="text" placeholder='Name or Number' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div style={{position:"absolute",display:"grid",top:"0%",left:"44%"}}>
            <label className="label-text">Type</label> 
            <select className="filter-input" style={{width:"200px"}}>
              {   
                pokeTypeData?.map((pokemon)=>{
                      <option value={pokemon.name}>{pokemon.name}</option>
                    })
                  }
            </select>
        </div>
        <div style={{position:"absolute",display:"grid",top:"0%",left:"70%"}}>
            <label className="label-text">Gender</label>
            <select className="filter-input" style={{width:"200px"}}>

            </select>
        </div>
        
      </div>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.filter((pokemonStats,index)=>{
               if(search==""){
                 return pokemonStats;
               }
               else if( pokemonStats.name.toLowerCase().includes(search.toLowerCase()) || pokemonStats.id.toString().includes(search)){
                 return pokemonStats;
               }
          }).map( (pokemonStats, index) => 
            <PokemonList
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              pokeData={pokemonStats}
            />)}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;
