import {Routes, Route} from 'react-router-dom'
import {Homepage} from './pages/Homepage'
import About from './pages/About'
import {ToastContainer} from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </header>
      <ToastContainer autoClose={1000} closeOnClick theme='dark' />
    </div>
  )
}

export default App
