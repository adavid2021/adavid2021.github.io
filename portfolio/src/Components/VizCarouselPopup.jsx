function VizCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControls" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div"
                                     data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz1.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Most used Citi Bike stations</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz2.png" alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Top 6 Most biked months of each year</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz3.png" alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Top 6 Most biked months of each year</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz4.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Map of New York Boroughs</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz5.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Symbol map of motor-vehicle accidents with injured cyclists in New York
                                            City</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/Viz6.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Cyclist-motor-vehicle collisions in New York City by time of day</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
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

export default VizCarouselPopup
