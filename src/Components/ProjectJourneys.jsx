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
                                            Implement a website showing potential career paths for employees at the
                                            client's worksite
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
                                        I demoed versions of the website to clients and answered questions about
                                        its functionality.
                                    </p>
                                </div>
                                <div className="border-right"/>
                            </div>
                            <div className="project-lower-band">
                                <h5>Project Overview</h5>
                                <p>
                                    I was contracted by a maritime company to implement a website which visualized
                                    potential
                                    career routes. The site let users see position details and compare
                                    salaries of two positions.
                                    A version of the site should be up at <a
                                    href="https://www.demos.journeys.mindandculture.org/"
                                    target="_blank">this link.</a>
                                </p>
                                <hr/>
                                <h5>Intro Questionnaire</h5>
                                <p>
                                    Upon entering the website, the user is prompted with questions that are used to
                                    represent their career path.
                                    The site asks for their education level, their main career goals and their skills.
                                    This information is used to show what career paths they can take. Then, If the user
                                    clicks the "Pathways" button,
                                    they are taken to a page which shows a graph of career position nodes showing which
                                    positions lead to which. If the user clicks the
                                    position comparison button, they can look at the projected salaries of two jobs and
                                    see the job's details.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeQuestShowing}>
                                    <img src="./questionnaire1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click for more details</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <h5>The Pathways Page</h5>
                                <p>
                                    After completing the questionnaire, the user has access to the career pathways page
                                    where
                                    if a user clicks on a
                                    position node, they can see more details like its description, salary
                                    range, benefits, education requirement, skills and videos associated with
                                    the position. A user can also click on the "learn more" button to see a projection
                                    of salary after working at the position for a specified number of years. Using
                                    filters on the side, a user can specify the details of jobs they are
                                    interested in. All submitted filters are saved in the URL allowing users to return to their
                                    career career graph if they copy and save the link somewhere.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changePathShowing}>
                                    <img src="./path1.png"
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
                                    pathways page.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeJourneyShowing}>
                                    <img src="./journey1.png"
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
