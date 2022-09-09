import { createContext, useState, useEffect } from "react";
import pokeApi from "../services/pokeApi";
import pokeInfoApi from "../services/pokeInfoApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const pokeContext = createContext({})

export function PokeProvider( {children} ) {



    // home
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(0)
    const [att, setAtt] = useState(0)
    const [search, setSearch] = useState('')  

    // favoritos

    const [favorites, setFavorites] = useState([])
   
 

    // chamada dos pokemon no home

        const pagesCount = 25

        useEffect(() => {
     
         async function getPokemonInfo(limit = pagesCount, offset = pagesCount * page){
             const resp = await pokeInfoApi.get(`pokemon?limit=${limit}&offset=${offset}`)
             const urlPromises = resp.data.results.map( async (poke) => {
                  const response = await fetch(poke.url)
                  return await response.json()
             })
      
            const results = await Promise.all(urlPromises)
            setPokemons(results)
            setLoading(false)
            setTotalPages(Math.ceil(resp.data.count / pagesCount))
          
         }
           
           getPokemonInfo()
            
        }, [page, att])
    


// chamada para buscar pokemon no search

async function getSearch(pokemon) {
   

     const resp = await pokeApi.get(`pokemon/${pokemon}`)
     if(search.length === 0){

        toast.info('Digite o nome de um Pokémon!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });

       
    } else{
        setPokemons([resp.data])
        setPage(0)
        setTotalPages(1)
        setLoading(false)
       
    }
  
 }


//  chamada para atualizar e chamar novamente os pokemon na home, mas dessa vez vai chamar quando clicar na logo

 function logoAtt() {
    async function getPokemonInfo2(limit = pagesCount, offset = pagesCount * page){
        const resp = await pokeInfoApi.get(`pokemon?limit=${limit}&offset=${offset}`)
        const urlPromises = resp.data.results.map( async (poke) => {
             const response = await fetch(poke.url)
             return await response.json()
        })
 
       const results = await Promise.all(urlPromises)
       setAtt(results)
      
    }
      
      getPokemonInfo2()
      setSearch('')
       
 }




    return(

    

          <pokeContext.Provider value={{pokemons, loading, totalPages, page,
          setPage, getSearch, logoAtt,search, setSearch}}>
         
         
          <ToastContainer
             position="top-right"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
        />

        <ToastContainer />

        {children}

      </pokeContext.Provider>


    

    )
}