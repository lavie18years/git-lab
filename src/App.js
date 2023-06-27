import './App.css';
import Film from './components/Films';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Detail from './components/Detail';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
