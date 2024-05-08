import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import ProjectCNRC from "./Components/ProjectCNRC.jsx";
import ProjectNYCBiking from "./Components/ProjectNYCBiking.jsx";
import ProjectNBATwitter from "./Components/ProjectNBATwitter.jsx";
import ProjectJourneys from "./Components/ProjectJourneys.jsx";
import ProjectNBAStats from "./Components/ProjectNBAStats.jsx";
import {RouterProvider} from "react-router";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Portfolio from "./Components/Portfolio.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                path: "/project_cnrc",
                element: <ProjectCNRC/>
            },
            {
                path: "/project_nyc_biking",
                element: <ProjectNYCBiking/>
            },
            {
                path: "/project_nba_twitter",
                element: <ProjectNBATwitter/>
            },
            {
                path: "/project_journeys",
                element: <ProjectJourneys/>
            },
            {
                path: "/project_nba_stats",
                element: <ProjectNBAStats/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
