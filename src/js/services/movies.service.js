const BASE_uRL = 'https://api.themoviedb.org/3'
const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba'

export default {
    // fetchPopularMovies() {
    //     const url
    //     return fetch(`${BASE_uRL}/movie/popular?api_key=${API_KEY}`)
    //         .then(res => res.json)
    // },


     async fetchPopularMovies(page = 1) {
        const rawResult = await fetch(`${BASE_uRL}/movie/popular?api_key=${API_KEY}&page=${page}`);
        if (!rawResult.ok) {
            throw rawResult
        }
         const result = await rawResult.json()
         return result
    },

    async fetchTopMovies() {
        const rawResult = await fetch(`${BASE_uRL}/movie/top_rated?api_key=${API_KEY}`);
        if (!rawResult.ok) {
            throw rawResult
        }
        const result = await rawResult.json()
        return result
    }
}