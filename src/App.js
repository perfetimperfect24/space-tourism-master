import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
    <div className='App font-main'>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
