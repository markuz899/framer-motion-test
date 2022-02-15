import { useState, useEffect } from "react";
import Movie from "./components/movie";
import Filter from "./components/filter";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [list, setList] = useState("popular");

  useEffect(() => {
    fetchPopular();
  }, [list]);

  const fetchPopular = async () => {
    let uri = `https://api.themoviedb.org/3/movie/${list}?api_key=891ceefe052ce2c376cec8634e0f0480`;
    const data = await fetch(uri);
    const movies = await data.json();
    if (movies) {
      setPopular(movies.results);
      setFiltered(movies.results);
    }
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        list={list}
        setList={setList}
      />
      <motion.div layout className="popular-movie">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
