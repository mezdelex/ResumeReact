import Experience from "../pages/Experience"
import Projects from "../pages/Projects"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  { path: '/', element: <Experience /> },
  { path: '/projects', element: <Projects /> }
])

export default router
