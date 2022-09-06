import {NavLink, Routes, Route} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';

const Coke = () => (
<div>
  Coke
  <NavLink to="/">Back</NavLink>
</div>);
const Chips = () => (
<div>
  Chips
  <NavLink to="/">Back</NavLink>
</div>
);
const Kitkat = () => (
<div>
  Kitkat
  <NavLink to="/">Back</NavLink>
</div>);

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/coke">Coke</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/kitkat">Kitkat</NavLink>
      </nav>
      <div>
        <Routes>
          <Route exact path="/" element={<VendingMachine/>}/>
          <Route exact path="/coke" element={<Coke/>}/>
          <Route exact path="/chips" element={<Chips/>}/>
          <Route exact path="/kitkat" element={<Kitkat/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
