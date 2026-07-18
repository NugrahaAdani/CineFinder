import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import MovieDetailPage from "./pages/MovieDetailPage"
import FavoritePage from "./pages/FavoritePage"

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} /> 
    </Routes>
  );
}


