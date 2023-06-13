
import './App.css'
import Home from './components/Home'
import WIP from './components/WIP';
import Nav from './components/Nav';

import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Nav />}>
      <Route path="/" element={ <Home /> } />
      <Route path="/Work" element={ <Work /> } />
      <Route path="/About" element={ <About /> } />
      <Route path="/wip" element={ <WIP /> } />
      <Route path="/Contact" element={ <Contact /> } />
      {/* ... etc. */}
    </Route>
  )
);





export default router
