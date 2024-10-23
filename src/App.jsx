import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Home from './routes/Home';
import Worksheet from './routes/Worksheet';
import Settings from './routes/Settings';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <ResponsiveNavbar />
        <main className='main__content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/worksheet' element={<Worksheet />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
