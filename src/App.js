
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header"
import LabelBottomNavigation from "./component/Navbar/Navbar";
import Container from '@mui/material/Container';
import Trending from "../src/Pages/Trending/Trending"
import Movies from "../src/Pages/Movies/Movies"
import Series from "../src/Pages/Series/Series"
import Search from "../src/Pages/Search/Search"

function App() {
  return (
    <Router basename='/'>
    <Header/>
    <div className="App">
      <Container>
       <Routes>
         <Route path="/" element={<Trending/>} exact />
         <Route path="/movies" element={<Movies/>} />
         <Route path="/series" element={<Series/>} />
         <Route path="/search" element={<Search/>} />
       </Routes>
      </Container>
    </div>
    <LabelBottomNavigation/>
    </Router>
  );
}

export default App;
