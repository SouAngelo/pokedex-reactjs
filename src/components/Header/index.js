import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {pokeContext} from '../../contexts/pokeContexts'

function mouseOver(){
    document.querySelector('.text').style.display ='block'

}

function mouseLeave(){
    document.querySelector('.text').style.display ='none'
}

function Header() {

   const {logoAtt} = useContext(pokeContext)
  
    return(
        <div>
            <header>
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" onClick={logoAtt}/>
                  
            </header>
        </div>
    )
}

export default Header