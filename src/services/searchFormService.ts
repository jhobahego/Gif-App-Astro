// const GIPHY_URL = import.meta.env.PUBLIC_GIPHY_API_URL;
// const GIPHY_KEY = import.meta.env.PUBLIC_GIPHY_API_KEY;
const TENOR_URL = import.meta.env.PUBLIC_TENOR_API_URL;
const TENOR_KEY = import.meta.env.PUBLIC_TENOR_API_KEY;

export async function getGifsByKeyword({ keyword = 'bear', rating = 'g' }: { keyword: string, rating?: string }) {
  // const giphySearch = `${GIPHY_URL}search?api_key=${GIPHY_KEY}&q=${keyword}&limit=10&offset=0&locale=en&rating=${rating}`;
  const tenorSearch = `${TENOR_URL}search?key=${TENOR_KEY}&q=${keyword}&limit=10&offset=0&locale=en&ContentFilter=high`;

  // const res = await fetch(giphySearch, {
  const res = await fetch(tenorSearch, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) throw new Error("Ha habido un error, intentalo de nuevo mas tarde");

  return await res.json();
}