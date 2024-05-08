function ResultsCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControlsResults" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div" data-bs-interval="1000000">
                                    <img src="./stats3.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Coefficient Values and General Model Summary</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                The significant predictors in the model were age, games played, minutes,
                                                points, offensive rebounds, assists, turnovers, and steals. Older
                                                players, and players with more assists and steals played the biggest
                                                role for their team according to the model. Players with more turnovers
                                                had a negative impact on their team's success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./stats4.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Residual Graph</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                This graph displays the difference between the predicted and actual
                                                point differential (the residual) on the y axis. The x axis represents
                                                the total points the player scored in the season. The model was better
                                                at players with fewer points scored, but struggled to predict +/- of
                                                high scoring players.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./stats5.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Residual Histogram</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                The distribution of residuals is negatively skewed indicating that model
                                                predicted players to have a higher +/- than their actual +/-.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControlsResults" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControlsResults" data-bs-slide="next">
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

export default ResultsCarouselPopup
