import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <ResponsiveNavbar />
        <main>
          <Routes>
            <Route path='/' />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
