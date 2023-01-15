import Counter from './Counter';
import '../styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NameGenerator from './NameGenerator';

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Compteur</Link>
        <Link to='/names'>Générateur de noms</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Counter />}></Route>
        <Route path='/names' element={<NameGenerator />}></Route>
      </Routes>
    </>
  );
}

export default App;
