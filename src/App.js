
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import PokemonDetailScreen from './components/PokemonDetailScreen';

function App() {

  // const arr = async () => {
  //   const red = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //   const blue = await axios.get("https://pokeapi.co/api/v2/pokemon-species/6")

  //   console.log(red)
  //   console.log("blue", blue)
  // }

  // useEffect(() => {
  //   arr()
  // }, [])

  return (
   <Router>
     <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/:id" element={<PokemonDetailScreen/>}/>
     </Routes>
   </Router>
  );
}

export default App;
