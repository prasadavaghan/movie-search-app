import './App.css';
import { useEffect, useState } from "react"
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import MovieSearch from './components/movies';
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
