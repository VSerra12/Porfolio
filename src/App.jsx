import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <div className='nav'>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/Portfolio/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/Portfolio/' element={<Portfolio />}/>
      </Routes>
    </>
  )
}

export default App
