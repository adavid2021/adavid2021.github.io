import './App.css'
import NavBar from "./Components/NavBar.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import ProjectCNRC from "./Components/ProjectCNRC.jsx";
import ProjectNYCBiking from "./Components/ProjectNYCBiking.jsx";
import ProjectNBATwitter from "./Components/ProjectNBATwitter.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <NavBar/>
          <BrowserRouter>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/portfolio" element={<Portfolio/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/project_cnrc" element={<ProjectCNRC/>}/>
                  <Route path="/project_nyc_biking" element={<ProjectNYCBiking/>}/>
                  <Route path="/project_nba_twitter" element={<ProjectNBATwitter/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
