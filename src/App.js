import "./App.css";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((error) => console.log(error));
  }, [page]);
  console.log(characterList);
  const previousPage = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty characters</h1>

        <main>
          <button onClick={previousPage}>Recuar</button>
          <button onClick={() => setPage(page + 1)}>Avançar</button>
          <Characters characterList={characterList} />
        </main>
      </header>
    </div>
  );
};

export default App;
