const BASE_URL = "https://api.themoviedb.org/3";

const options = {
    headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
};

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day`,
    options
  );

  return response.json();
}