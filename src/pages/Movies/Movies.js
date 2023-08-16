import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singlecontent from '../../components/Singlecontent/Singlecontent';
import CustomPagination from '../../pagination/CustomPagination';
// import Genres from '../../components/Genres';

const Movies = () => {

  const[page,setPage]=useState(1);
  const [content,setContent]=useState([])
  const[noofPages,setNumofPages]=useState();
  // const[selectedGenres,setSelectedGeneres]=useState([]);
  // const[genres,setGenres]=useState([]);
  const fetchMovies=async ()=>
  {
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${`592ec216b760f3a289c853c141d13394`}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}`);
     setContent(data.results);
     setNumofPages(data.total_pages)
    //  console.log(data)
  }

  useEffect(()=>
  {
    window.scroll(0,0);
    fetchMovies();
  },[page])
  return (
    <div>
      <span className='pageTitle'>Movies</span>
      {/* <Genres type="movie" 
      selectedGenres={selectedGenres} 
      setSelectedGeneres={setSelectedGeneres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
      /> */}
      <div className='trending'>
        {content&&content.map((c)=>
        <Singlecontent 
        key={c.id} 
        id={c.id}
         poster={c.poster_path} 
         title={c.title || c.name} 
         date={c.first_air_date || c.release_date}
         media_type={c.movies}
         vote_average={c.vote_average}/>
        )}
      </div>
      <CustomPagination setPage={setPage} noofPages={noofPages}/>
    </div>
  )
}

export default Movies
