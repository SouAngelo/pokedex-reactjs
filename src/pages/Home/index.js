import {useContext} from 'react'
import Pokemon from '../../components/Pokemon/index'
import Search from '../../components/Searchbar/index'
import { pokeContext } from '../../contexts/pokeContexts'

function Home(){

  const {pokemons, totalPages, loading, page, setPage} = useContext(pokeContext)
  



   if(loading){
       return(
        <div className="lds-ring">
            <div></div><div></div><div></div><div></div>
        </div>
       )
   }

    return(
        <div className='container'>
            <Search
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            />  

            <div className='pokedex'>
            
                {pokemons.map((poke, key) => {
                    return(
                        <div key={key}>
                               <Pokemon key={key} poke={poke}/>
                        </div>
                        // <Pokemon key={key} poke={poke}/>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Home