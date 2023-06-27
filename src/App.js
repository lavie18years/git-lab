import './App.css';
import Film from './components/Films';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import News from './components/News';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
