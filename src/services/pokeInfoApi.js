import axios from 'axios'

const pokeInfoApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})



export default pokeInfoApi