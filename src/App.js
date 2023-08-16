import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Header/Mainnav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Trending from './pages/Movies/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Movies/Trending/Series/Series';
import Search from './pages/Movies/Trending/Series/Search/Search';

function App() {
  return (
    <>    
    <BrowserRouter>
        <Header/>
    
      <div className='App'> 
      <Container>
        <Routes>
          <Route path='/' Component={Trending} exact></Route>
          <Route path='/movies' Component={Movies}></Route>
          <Route path='/series' Component={Series}></Route>
          <Route path='/search' Component={Search}></Route>
        </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>

    </>

  );
}

export default App;
