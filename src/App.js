import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Space  from './pages/space.js'
import  NewReservation  from './pages/newreservation.js'
import  Home  from './pages/home.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newreservation" element={<NewReservation />}></Route>
          <Route path="/space" element={<Space />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
