import {useState} from "react"
import QuestionnaireCarouselPopup from "./QuestionnaireCarouselPopup.jsx";
import PathwaysCarouselPopup from "./PathwaysCarouselPopup.jsx";
import JourneyCarouselPopup from "./JourneyCarouselPopup.jsx";

function ProjectJourneys() {
    // state variable of questionnaire popup showing
    const [isQuestPopupShowing, setIsQuestPopupShowing] = useState(false)
    const changeQuestShowing = (newValue) => {
        setIsQuestPopupShowing(newValue);
    };

    const [isPathPopupShowing, setIsPathPopupShowing] = useState(false)
    const changePathShowing = (newValue) => {
        setIsPathPopupShowing(newValue);
    };

    const [isJourneyPopupShowing, setIsJourneyPopupShowing] = useState(false)
    const changeJourneyShowing = (newValue) => {
        setIsJourneyPopupShowing(newValue);
    };

    return (<>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-og scrollable-div">
                        <div className="project-bg">
                            <div className="project-title">
                                <h3>Journeys: A Career Navigation Website</h3>
                            </div>
                            <div className="project-upper-band">
                                <div className="project-upper-band-item upper-padding">
                                    <h4>Goals</h4>
                                    <ul>
                                        <li>
                                            Implement a website showing career paths at client worksite
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item">
                                    <h4>Skills Developed</h4>
                                    <b>Technical:</b>
                                    <br/>
                                    <p>
                                        I developed a website front-end with React, CSS, and HTML.
                                    </p>
                                    <br/>
                                    <b>General:</b>
                                    <br/>
                                    <p>
                                        I demonstrated versions of the website to clients and answered questions about
                                        its functionality.
                                    </p>
                                </div>
                                <div className="border-right"/>
                            </div>
                            <div className="project-lower-band">
                                <h5>Project Overview</h5>
                                <p>I was contracted by a maritime company to implement a website which visualized
                                    potential
                                    career routes. The site let users see position details and compare
                                    salaries of two positions.
                                    The should be up at </p> <a href="https://www.demos.journeys.mindandculture.org/"
                                                                target="_blank">this link.</a>
                                <hr/>
                                <h5>Intro Questionnaire</h5>
                                <p>
                                    Upon entering the website, the user is prompted with a questions which dictate their
                                    career path.
                                    The site asks for their education level, their main career goal and their skill-set.
                                    This information is used to show what career paths they can take. If the user
                                    clicks the "Pathways" button,
                                    they are taken to a page which shows a graph of career position nodes showing which
                                    positions lead to which. If the user clicks the
                                    position comparison button, they can look at the projected salaries of two jobs and
                                    see
                                    their job details.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeQuestShowing}>
                                    <img src="../../src/assets/questionnaire1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click for more details</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <h5>The Pathways Page</h5>
                                <p>
                                    After completing the questionnaire, the user has access to the career pathways page
                                    which
                                    If a user clicks on a
                                    position, they can see more details about the position like its description, salary
                                    range, benefits, education requirement, skills and video resources associated with
                                    the position. A user can also click on the "learn more" button to see a projection
                                    of salary after working at the position for a specified number of years. Using
                                    filters on the side, a user can adjust various specifications of jobs they are
                                    interested in. Once the user changes which filters are selected, the graph is
                                    re-rendered. All filter data is saved in the URL allowing users to return to their
                                    career career graph if they copy and save the link somewhere.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changePathShowing}>
                                    <img src="../../src/assets/path1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click for more details</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <h5>Creating a Journey</h5>
                                <p>
                                    The user is able to save a sequence of positions they would like to go down to a
                                    "journey". They can do this from the career pathways page by selecting a job node
                                    from the graph and clicking the "add to my journey" button. This saves the position
                                    to a pdf file viewable upon clicking the "my journey" button from the career
                                    pathways page. A user can download a pdf of their journey to print or save to their
                                    device.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeJourneyShowing}>
                                    <img src="../../src/assets/journey1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click for more details</strong></div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuestionnaireCarouselPopup isShowing={isQuestPopupShowing} setIsShowing={changeQuestShowing}/>
            <PathwaysCarouselPopup isShowing={isPathPopupShowing} setIsShowing={changePathShowing}/>
            <JourneyCarouselPopup isShowing={isJourneyPopupShowing} setIsShowing={changeJourneyShowing}/>
        </>
    )
}

export default ProjectJourneys
