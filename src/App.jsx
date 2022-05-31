import React from 'react'
import './styles/global.scss'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Studies from './components/Studies'

const App = () => {

  return (
    <div id='app-container'>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main></Main> }></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/WorkExperience' element={<WorkExperience></WorkExperience>}></Route>
        <Route path='/Studies' element={<Studies></Studies>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;