// This is the framer motion library.
import { motion, AnimatePresence } from "framer-motion"
// This is the react router library.
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// These are our page functions we are importing.
import Home from './pages/home.jsx';
import About from "./pages/about.jsx";
import Travel from "./pages/travel.jsx";
import Mars from './pages/mars.jsx';
import Planet from './pages/planet.jsx';
// CSS file for the app
import './App.css';

// This states the element a route produces
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: 'planet/mars',
    element: <Mars />
  },
  {
    path: "travel/:planetID",
    element: <Travel />
  },
  {
    path: "planet/:planetID",
    element: <Planet />
  }

], {
  basename: "/",
});
// The app function that is called by main.jsx
function App(props) {
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}
// Allows App to be exported
export default App
