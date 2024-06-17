const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url) {
    try {
        console.log('Fetching movies from URL:', url) // Added for debugging
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const data = await res.json()
        console.log('Movies fetched:', data.results) // Added for debugging
        showMovies(data.results)
    } catch (error) {
        console.error('Error fetching movies:', error)
        main.innerHTML = '<p>Failed to fetch movies. Please try again later.</p>' // Display error message to user
    }
}

function showMovies(movies) {
    main.innerHTML = ''
    if (!movies || movies.length === 0) {
        main.innerHTML = '<p>No movies found</p>' // Handle case where no movies are found
        return
    }
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${poster_path ? IMG_PATH + poster_path : 'path/to/default/image.jpg'}" alt="${title}"> <!-- Handle missing poster -->
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value.trim()

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})