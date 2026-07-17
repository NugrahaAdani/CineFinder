const BASE_URL = 'https://api.themoviedb.org/3'

export async function getTrendingMovies() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  
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