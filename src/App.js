import './App.scss'
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
import Layout from './components/Layout'
// import About from './components/About'
// import Contact from './components/Contact'
// import Projects from './pages/Projects'
// import ProjectDisplay from './pages/ProjectDisplay'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
