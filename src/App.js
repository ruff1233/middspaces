import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Space  from './pages/Space.js';
import About  from './pages/About.js';
import TopBar from './components/TopBar.js';
import NewReservation  from './pages/NewReservation.js';
import Home  from './pages/Home.js';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newreservation" element={<NewReservation />}></Route>
          <Route path="/space" element={<Space />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
