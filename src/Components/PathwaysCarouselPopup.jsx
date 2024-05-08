function PathwaysCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControlsPathways" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div" data-bs-interval="1000000">
                                    <img src="./path1.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Career Pathway Visualization</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                This is an example career pathway. The user can toggle job category,
                                                salary min and max range, skills required and the timeframe of the
                                                position with the filters on the right tab.
                                                When hovering over a position node, the user can see the required
                                                positions to get to a certain position at the company.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./path2.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Career Details</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                When clicking on a position node, a popup like this one is displayed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControlsPathways" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControlsPathways" data-bs-slide="next">
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

export default PathwaysCarouselPopup
