import React, { useContext } from 'react'
import {pokeContext} from '../../contexts/pokeContexts'

function Pokemon(props){

    const {poke} = props;
    const {loading} = useContext(pokeContext)

    

    if(loading){
      return(
       <div className="lds-ring">
           <div></div><div></div><div></div><div></div>
       </div>
      )
  }
  
  

    return(
      <div className='pokedex-containers'>
         <div className='pokeImg'>
             <img src={poke.sprites.front_default}/>
          </div>

          <div className='container-pokeInfo'>
           
              <div className='pokeInfoName'>
                  <h1>{poke.name}</h1>
                  <p>#{poke.id}</p>
              </div> 

              <div className='container-pokeInfoType'>
                      <div className='pokeType'>
                        
                          {poke.types.map((type, index) => {
                            return(
                              <article key={index} className='pokeTypeText'>{type.type.name}</article>
                            )
                          })}

                          
                      </div>
                  
              </div>


          </div>
          
        </div>
        
        )
}

export default Pokemon