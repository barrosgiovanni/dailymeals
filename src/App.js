import './App.css';
// import Favourites from "./components/Favourites";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Search from "./components/Search";
import { useGlobalContext } from './context';

function App() {

  const { isModalOpened } = useGlobalContext();

  return (
    <main>
      <Search />
      {/* <Favourites /> */}
      <Meals />
      { isModalOpened && <Modal /> }
    </main>
  );
}

export default App;
