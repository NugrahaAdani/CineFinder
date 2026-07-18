const BASE_URL = 'https://api.themoviedb.org/3'
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export async function getTrendingMovies() {
  if (!apiKey) {
    throw new Error('VITE_TMDB_TOKEN is not configured')
  }

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`)
  }

  const data = await response.json()
  return data.results ?? []
}

export async function getSearchMovies(query){
  if(!apiKey){
    throw new Error('VITE_TMDB_TOKEN is not configured');
  }

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=id-ID&include_adult=true`
  );

  if(!response.ok){
    throw new Error(`TMDB request failed (${response.status})`)
  }

  const data = await response.json()
  return data.results ?? []

}

export async function getMovieDetail(id){
  if (!apiKey) {
    throw new Error("VITE_TMDB_API_KEY is not configured");
  }

  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${apiKey}&language=id-ID&include_adult=true`
  );

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  return response.json();
}