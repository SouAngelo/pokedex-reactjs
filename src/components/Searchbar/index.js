import {useState, useContext} from 'react'
import Paginacao from '../Paginacao/index'
import { pokeContext } from '../../contexts/pokeContexts'


function Search(props){
    
    const {page, totalPages, setPage} = props
    const {getSearch, search, setSearch} = useContext(pokeContext)
 
     const onSearchHandler = (e) => {
         setSearch(e.target.value.toLowerCase())
     }


  const backButton = () => {
      if(page > 0){
          setPage(page - 1)
      }
  }

  const nextButton = () =>{
    if(page+1 !== totalPages){
        setPage(page + 1)
    }
  }

   
  function getSearchPokemon(){
      getSearch(search)
  }
   
       
    return(
 
        

        <div className='search-content'>
            <div className='searchContainer'>
                <input type='text' 
                placeholder='Busque um Pokémon'
                value={search}
                onChange={onSearchHandler} 
                />
                
                <i className="fa-solid fa-magnifying-glass" onClick={getSearchPokemon}></i>
            </div>
        
            

            <div className='pagination'>
                <Paginacao
                page={page + 1}
                totalPages={totalPages}
                backButton={backButton}
                nextButton={nextButton}
                />
            </div>
        </div>
    )
}

export default Search