// import { useState } from 'react'
import NavBar from "./NavBar.jsx";

function Home() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div className="home-page global-style">
                <div className="opaque-bg">
                    <div className="home-name">
                        <h1 id="home-text" style={{opacity: 100}}>Aidan David</h1>
                        <h3 id="home-text2">Data Analyst / Software Engineer</h3>
                    </div>
                    {/*<h2>this is an H2</h2>*/}
                    {/*<h3>this is an H3</h3>*/}
                    {/*<h4>this is an H4</h4>*/}
                </div>
            </div>
        </>
    )
}

export default Home
