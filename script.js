


window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }

    async function fetchMovies(url, dom_element, path_type) {
    
    let response=await fetch(url)
    let data=await response.json()
    showMovies(data,dom_element,path_type)
    }

    showMovies = (movies, dom_element, path_type) => {
        let elementDiv=document.querySelector(dom_element)
        for(var movie of movies.results){
            let imgEl=document.createElement('img')
            imgEl.setAttribute('data-id',movie.id)
            imgEl.src=`https://image.tmdb.org/t/p/original${movie[path_type]}`
            elementDiv.appendChild(imgEl)
        }
    
  }

  function getOriginals() {
    let url='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    fetchMovies(url, '.original__movies', 'poster_path')  }

  function getTrendingNow() {
    var url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
      fetchMovies(url, '#trending', 'backdrop_path')
  }

  function getTopRated() {
    var url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
    fetchMovies(url, '#top_rated', 'backdrop_path')
  }
  
  
  
  
  
  