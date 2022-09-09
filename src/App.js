import Header from './components/Header/index'
import Home from './pages/Home/index'

import './App.css';
import { PokeProvider } from './contexts/pokeContexts'


function App() {
  return (
    <div className="App">
      <PokeProvider> 
         <Header/>
         <Home/>
          
      </PokeProvider>
     
    </div>
  );
}

export default App;
