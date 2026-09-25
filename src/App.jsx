import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import Work from './components/pages/Work'
import About from './components/pages/About'
import Process from './components/pages/Process'
import StartProject from './components/pages/StartProject'
import ServiceDetail from './components/pages/ServiceDetail'
import ProjectCaseStudy from './components/pages/ProjectCaseStudy'
import NotFound from './components/pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home2 from './components/pages/Home2'

function App() {
  const [count, setCount] = useState(0)

    const navList=[
    {
      path:"/",
      element:<Home2/>
    },
    {
      path:"/service",
      element:<Service/>
    },
    {
      path:"/services/:slug",
      element:<ServiceDetail/>
    },
    {
      path:"/work",
      element:<Work/>
    },
    {
      path:"/work/:slug",
      element:<ProjectCaseStudy/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/process",
      element: <Process/>
    },
    {
      path:"/start-project",
      element: <StartProject/>
    }
  ]

  const OtherRoutes=[

    {
      path:"*",
      element:<NotFound/>
    },
    
  ]

  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>}>
         {navList.map((r,idx)=>(
         <Route key={idx} path={r.path} element={r.element} />
       )
       )}
      </Route>

         {OtherRoutes.map((r,idx)=>(
         <Route key={idx} path={r.path} element={r.element} />
         )
         )}

    </Routes>
    </>
  )
}

export default App
