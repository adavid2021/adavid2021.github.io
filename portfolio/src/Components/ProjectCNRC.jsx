import {useState} from "react";
import EnlargedImagePopup from "./EnlargedImagePopup.jsx";

function ProjectCNRC() {
    // state variable of if NFQ popup showing
    const [isNFQPopupShowing, setIsNFQPopupShowing] = useState(false)
    const changeNFQShowing = (newValue) => {
        setIsNFQPopupShowing(newValue);
    };
    return (<>
        <div className="portfolio-page global-style">
            <div className="opaque-bg">
                <div className="c-contact-a scrollable-div">
                    <div className="project-bg">
                        <div className="project-title">
                            <h3>Predicting Nightmares with Machine Learning</h3>
                        </div>
                        <div className="project-upper-band">
                            <div className="project-upper-band-item upper-padding">
                                <h4>Goals</h4>
                                <ul>
                                    <li>
                                        Determine which
                                        cognitive measures are most important in predicting
                                        nightmares in elderly people
                                    </li>
                                    <li>
                                        Program an optimized computational
                                        model to potentially intervene nightmares
                                        before they occur
                                    </li>
                                    <li>
                                        Compare the predictive power of the computational model to that of
                                        linear regression to see if a theory-based model can outperform a classic
                                        machine learning model
                                    </li>
                                </ul>
                            </div>
                            <div className="border-right"/>
                            <div className="project-upper-band-item">
                                <h4>Skills Developed</h4>
                                <b>Technical:</b>
                                <br/>
                                <p>
                                    I programmed computational (theory-based) models with Java, conducted and automated
                                    hypothesis testing in
                                    statistical tests with SPSS, and developed predictive models using R. I also
                                    visualized outputs with graphing libraries to explain the data.
                                </p>
                                <br/>
                                <b>General:</b>
                                <br/>
                                <p>
                                    I presented findings to a technical and non-technical audience
                                    of supervisors and clients.
                                </p>
                            </div>
                            <div className="border-right"/>
                            <div className="project-upper-band-item lower-padding">
                                <h4>Project Findings</h4>
                                <p>
                                    We found that lack of cognitive control (a person’s perceived ability to control
                                    intrusive negative
                                    thoughts and to manage stressful situations) correlates to the frequency and impact
                                    of
                                    nightmares.
                                    We are in the process of publishing these findings to a sleep studies
                                    journal. Additionally, we learned that our model was not complex enough to capture
                                    relationships between variables from the survey data.
                                </p>
                            </div>
                        </div>
                        <div className="project-lower-band">
                            <h5>Preprocessing the Survey Data</h5>
                            <p>
                                The survey we used measured various cognitive
                                functions and mental disorders using various questionnaires like the DASS (Depression
                                Anxiety
                                Stress Scale) and the Big Five Inventory (BFI). There were over 400 questions in the
                                dataframe from various
                                questionnaires and we wanted to represent both inputs and outputs more generally, so I
                                reduced each
                                participant's information to 20 subscales representing sums of important sections from
                                the questionnaires.
                                Additionally,
                                I needed to drop the data of several participants as they incorrectly claimed to meet
                                the
                                nightmare disorder requirement (at least two nightmares each
                                month). This left us with data from 118 participants.
                                With the data preprocessed, I moved onto testing and modeling.
                            </p>
                            <hr/>
                            <h5>Determining Important Factors for Nightmares</h5>
                            <p>
                                Initially, I focused on hypothesis testing which I conducted utilizing
                                SPSS and R. I used ANOVAs to determine if certain demographic factors played a
                                statistically
                                significant role in determining nightmares. Then I used linear regressions to determine
                                if
                                combinations of cognitive measures could predict how frequently nightmares occurred, and
                                the day-time
                                effects they have on a person experiencing them.
                            </p>
                            <hr/>
                            <h5>Using the Survey Data to Predict Nightmares</h5>
                            <p>
                                We used select cognitive measures to predict nightmare
                                measures for each survey
                                participant.
                                <br/>
                                The input measures were as follows:
                                <br/>
                            </p>
                            <ul>
                                <li><b>PTSD:</b> The general impact of Post-Traumatic Stress Disorder on the
                                    simulated
                                    individual
                                </li>
                                <li><b>Cognitive Control Over Emotion:</b> The simulated individual’s estimated
                                    ability to
                                    maintain emotional stability
                                </li>
                                <li><b>Stress:</b> The simulated individual’s estimated stress level
                                </li>
                                <li><b>Depression:</b> The simulated individual’s estimated depression level
                                </li>
                                <li><b>ExecutiveScore:</b> The simulated individual’s estimated cognitive impairment
                                </li>
                                <li><b>Neuroticism:</b> The simulated individual’s estimated neuroticism</li>
                            </ul>
                            <p>
                                The outputs we predicted were as follows:
                                <br/>
                            </p>
                            <ul>
                                <li><b>Nightmare Distress:</b> The distress caused by the nightmares during the
                                    nightmare
                                </li>
                                <li><b>Nightmare Effects:</b> The negative psychophysiological effects caused by
                                    nightmares, including indirect impact such as REM deficit, sleep deficit, etc
                                </li>
                                <li><b>Nightmare Frequency:</b> how often a person has nightmares
                                </li>
                                <li><b>DASS Anxiety:</b> Depression and Anxiety levels caused by nightmares
                                </li>
                            </ul>
                            <p>
                                In the linear regression model, we trained with all 118 participant data rows and found
                                our goodness-of-fit measure (MSE) came out to be 0.0138 averaged across all four
                                outputs.
                            </p>
                            <br/>
                            <p>
                                In the computational model, we used theory from research on nightmare disorder and
                                validation from
                                neurology subject matter experts to refine a model simulating sleep.
                                I developed a way to calibrate this computational model by using an optimization
                                algorithm
                                from AnyLogic to find the best minimum and maximum values to scale each of the input and
                                output
                                variables on. With these scaling parameters, I predicted each participant's nightmare
                                indices
                                and compared them with the true values to get the MSE. The average MSE of the four
                                outputs for the computational
                                model was 0.0304 which was worse than that of its regression counter-part.
                            </p>
                            <br/>
                            <p>
                                As shown below, the computational model predicted a single value
                                for nightmare frequency about 60 times which negatively skewed what should have
                                been a normal distribution of prediction error. This was most likely
                                due to an insufficient number of implemented relationships between input variables.
                            </p>
                            <br/>
                            <div className="img-container hover-pointer" onClick={changeNFQShowing}>
                                <img src="../../src/assets/frequency.png"
                                     className="contain-this-image"></img>
                                <div className="enlarge-img-text"><strong>Click to enlarge</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <EnlargedImagePopup isShowing={isNFQPopupShowing} setIsShowing={changeNFQShowing}
                            imgSrc="../../src/assets/frequency.png"/>
    </>)
}

export default ProjectCNRC
