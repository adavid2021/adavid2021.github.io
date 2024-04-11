function ProjectCNRC() {
    return (<>
        <div className="portfolio-page global-style">
            <div className="opaque-bg">
                <div className="c-contact-a">
                    <div className="project-bg">
                        <div className="project-title">
                            <h3>Predicting Nightmares with Machine Learning</h3>
                        </div>
                        <div className="project-upper-band">
                            <div className="project-upper-band-item">
                                <h4>Goal</h4>
                                <p>In this project, I worked with researchers to determine which
                                    cognitive measures from survey data were most important when predicting
                                    nightmares experienced by the elderly.
                                    Additionally, I compared the effectiveness of a theory-based computational model
                                    to that of a linear regression model.</p>
                            </div>
                            <div className="project-upper-band-item">
                                <h4>Result</h4>
                                <p>We found that cognitive control (a person’s perceived ability to control
                                    intrusive negative
                                    thoughts and to manage stressful situations) was a clear measure for predicting
                                    nightmares.
                                    We are in the process of publishing these findings to a sleep studies
                                    journal.</p>
                            </div>
                            {/*<div className="project-upper-band-item">*/}
                            {/*    <h4>Project Duration</h4>*/}
                            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam consequatur*/}
                            {/*        corporis dolorum eius enim eum ipsam iste iusto maiores mollitia nemo nesciunt, non*/}
                            {/*        placeat quaerat sint sunt vitae? Enim!</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="project-lower-band-item">
                            <h4>Using Survey Data for Prediction</h4>
                            <p>If we could predict nightmares, we would be able to intervene someone before they have them
                                which could reduce the effect of <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2919672/">
                                    nightmare disorder</a> in those who suffer from it.

                                To determine how frequent and severe a person's nightmares were, I used qualtrics survey data
                            collected from 128 elderly survey participants. The survey measured various cognitive
                            functions and mental disorders using questionnaires such as the DASS (Depression Anxiety Stress Scale).
                            Next, I reduced the 400 questions to the 20 subscale totals we used to generally represent neasures of inputs
                            (cognitive functions) and outputs (nightmare frequency and nightmare effects). Then, I ran a simple linear
                            regression to train a model to predict each of the nightmare measures separately with the survey data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ProjectCNRC
