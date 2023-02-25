import './App.css';
import Favourites from "./components/Favourites";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Search from "./components/Search";
import { useGlobalContext } from './context';

function App() {

  const { isModalOpened, favourites } = useGlobalContext();

  return (
    <main>
      <Search />
      { favourites.length >= 1 && <Favourites /> }
      <Meals />
      { isModalOpened && <Modal /> }
    </main>
  );
}

export default App;
