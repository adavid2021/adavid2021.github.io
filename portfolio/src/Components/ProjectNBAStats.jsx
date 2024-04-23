import {useState} from "react"
import EnlargedImagePopup from "./EnlargedImagePopup.jsx";
import ResultsCarouselPopup from "./ResultsCarouselPopup.jsx";

function ProjectNBAStats() {
    // state variable of query popup showing
    const [isOutlierPopupShowing, setIsOutlierPopupShowing] = useState(false)
    const changeOutlierShowing = (newValue) => {
        setIsOutlierPopupShowing(newValue);
    };

    // state variable of if NBA popup showing
    const [isResultsPopupShowing, setIsResultsPopupShowing] = useState(false)
    const changeResultsShowing = (newValue) => {
        setIsResultsPopupShowing(newValue);
    };

    return (<>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-a scrollable-div">
                        <div className="project-bg">
                            <div className="project-title">
                                <h3>Quantifying NBA Player Impact</h3>
                            </div>
                            <div className="project-upper-band">
                                <div className="project-upper-band-item upper-padding">
                                    <h4>Goals</h4>
                                    <ul>
                                        <li>
                                            Understand the ETL process at a fundamental level
                                        </li>
                                        <li>
                                            Write a research paper on a hypothesis I have on real-world data
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item">
                                    <h4>Skills Developed</h4>
                                    <b>Technical:</b>
                                    <br/>
                                    <p>
                                        I used R to clean, hypothesis test, and build a linear regression model with a
                                        real dataset. I learned about research standards which I incorporated in my
                                        paper.
                                    </p>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item lower-padding">
                                    <h4>Project Findings</h4>
                                    <p>
                                        Investigating dataset entities closely can prevent the issues a predictive model
                                        can have.
                                    </p>
                                    <br/>
                                    <a href="../../src/assets/DAVID-TERM_PROJECT.pdf" target="_blank">full research paper link</a>
                                </div>
                            </div>
                            <div className="project-lower-band">
                                <h5>Project Overview</h5>
                                <p>
                                    Using data from the NBA's <a
                                    href="https://www.nba.com/stats/players/traditional/?sort=PLUS_MINUS&dir=-1&Season=2021-22&SeasonType=Regular%20Season&PerMode=Totals">NBA's
                                    2021-2022 season player statistics</a>, I wanted to see if I
                                    could predict a player's impact on their team's success when they are on the court.
                                    When making the dataset, I saved data from each of the player rows such that each
                                    row in the dataset represented the aggregate performance statistics of each player
                                    in the NBA in the 2021-2022 season.
                                </p>
                                <hr/>
                                <h5>Measuring Player Impact</h5>
                                <p>
                                    I represented player impact with the "+/-" (plus
                                    minus) variable which is the difference in points of the
                                    player's team and the team they were facing while the player was on the court. For
                                    example, if the score of a game when a player enters the court is 100 to 90 (where
                                    the player's team has 100 points and the opposing team has 90) and the
                                    score is 110 to 95 when the leave the court, the player's +/- is +5 as 10 points
                                    were scored and 5 points were given up while they played. If the score after the
                                    player leaves the court is 110 to 104, their +/- would be -4.
                                </p>
                                <hr/>
                                <h5>Cleaning the Data</h5>
                                <p>
                                    After adding the NBA data to a csv, I looked through the data to see what variables
                                    could cause problems for a predictive model. When looking at the field goal
                                    percentage variable, I noticed that there many instances of players with exactly 0%,
                                    50%, 33% and 100% field goal percentage. This happens to players with few minutes
                                    played as they only take a few shots each season. If a player has 7 minutes played,
                                    they may shoot 3 times and miss all three times giving them a 0% field goal
                                    percentage. It's safe to say that a player who misses every shot they take is not
                                    going to be drafted for an NBA team. Consequently, I removed "noise" player data by
                                    only including players with 10 or more minutes played.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeOutlierShowing}>
                                    <img src="../../src/assets/stats1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to enlarge</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <hr/>
                                <h5>Results</h5>
                                <p>
                                    While the regression model only had an r-squared of 0.1885, meaning that the model
                                    only accounted for 18% of the overall variance, the p-value was less than an alpha
                                    of 0.05 meaning that the changes in predictor values are related to change in the
                                    response variable.
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeResultsShowing}>
                                    <img src="../../src/assets/stats3.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click for more info</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EnlargedImagePopup isShowing={isOutlierPopupShowing} setIsShowing={changeOutlierShowing}
                                imgSrc="../../src/assets/stats1.png"/>
            <ResultsCarouselPopup isShowing={isResultsPopupShowing} setIsShowing={changeResultsShowing}/>
        </>
    )
}

export default ProjectNBAStats
