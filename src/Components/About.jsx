import {useState} from "react";
import VizCarouselPopup from "./VizCarouselPopup.jsx";
import LeisurePopup from "./LeisurePopup.jsx";

function About() {
    const [isLeisurePopupShowing, setIsLeisurePopupShowing] = useState(false)
    const changeLeisureShowing = (newValue) => {
        setIsLeisurePopupShowing(newValue);
    };
    return (
        <>
            <div className="about-page global-style">
                <div className="opaque-bg">
                    <div className="c-about-a">
                        <div className="dark-background">
                            <h1>About Me</h1>
                            <h5>
                                Hello, I'm Aidan!
                            </h5>
                            <br/>
                            <div className="c-about-upper">
                                <div className="c-about-threefourths">
                                    <h6>
                                        I am a data analyst and software engineer working in Boston and Greater
                                        Boston Massachusetts. I have a Master's degree in Applied Data Analytics
                                        from
                                        Boston
                                        University
                                        and a Bachelor's degree in Computer Science (minoring in data science) from
                                        Clark
                                        University.
                                    </h6>
                                    <br/>
                                    <h6>
                                        Since I was a kid looking at the nutrition facts on cereal boxes, I have
                                        enjoyed
                                        finding hidden meanings in numbers and patterns. For the past three years I
                                        have
                                        been
                                        applying my appreciation for data to business and research problems.
                                    </h6>
                                    <br/>
                                    <h6>
                                        I am looking for a position which will encourage the growth of my
                                        established
                                        technical
                                        and
                                        non-technical skills as a programmer and data specialist. If you are
                                        interested
                                        in
                                        working
                                        with me, reach out to me by email (ajdavid@bu.edu).
                                    </h6>
                                </div>
                                <div className="c-about-onefourth">
                                    <img src="../../src/assets/headshotIMG_2.png" className="about-img-face"/>
                                </div>
                            </div>
                            <hr/>
                            <h5>A glimpse at my free time</h5>
                            <h6>
                                When I'm not analyzing data or building software, I enjoy reading horror novels, doing
                                origami, practicing guitar, and playing video games.
                            </h6>
                            <div className="img-container hover-pointer" onClick={changeLeisureShowing}>
                                <img src="../../src/assets/dresser_img.jpg"
                                     className="contain-this-image"></img>
                                <div className="enlarge-img-text"><strong className="white-text">Click to
                                    enlarge</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LeisurePopup isShowing={isLeisurePopupShowing} setIsShowing={changeLeisureShowing}/>
        </>
    )
}

export default About
