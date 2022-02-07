import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AddNewMovie from './component/AddNewMovie';
import { Data } from './component/Data';
import Header from './component/Header';
import ListOfMovies from './component/ListOfMovies';

function App() {
  const [movie,setmovie]= useState (Data)
  const addnew=(x)=>{
    return setmovie([...movie,x])
  }
  const filterMovies=(searchText,rating)=>{
    setmovie(movie.filter(el=> el.rate>=rating && el.title.toLowerCase().includes(searchText.toLowerCase())))
  }
  return (
    <div>
      <Header filterMovies={filterMovies} />,
      <ListOfMovies movies={movie} />,
      <AddNewMovie addnew={addnew}/>
    </div>
  );
}

export default App;
