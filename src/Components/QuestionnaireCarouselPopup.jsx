function QuestionnaireCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControlsQuestionnaire" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div" data-bs-interval="1000000">
                                    <img src="./questionnaire1.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Home Page</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                Provides an intro to the questionnaire to explain the purpose of the
                                                site and why the user must answer the questions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./questionnaire2.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Questionnaire Prompt Page</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                This page collects information from a user which is saved in the URL and
                                                used when generating a career pathway graph later. In this image, the
                                                users skills are saved.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./questionnaire3.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Job Comparison</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                Once the user clicks on the "job comparison" button they are taken to a
                                                page where they may compare job details between two specified positions
                                                available at the company.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./questionnaire4.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Job Comparison Graph</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                If the user scrolls down, they may see the projected salary of the two
                                                compared jobs by year.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControlsQuestionnaire" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControlsQuestionnaire" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="close-button-popup" onClick={() => {
                        setIsShowing_(false)
                    }}>
                        <i className="fa-solid fa-xmark" id="closeQCarousel"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionnaireCarouselPopup
