function JourneyCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControlsJourney" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div" data-bs-interval="1000000">
                                    <img src="./journey1.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>User Journey Printout</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                A user can add positions to their career journey. When they do, they can
                                                view their journey by clicking the "my journey" button on the pathways
                                                page. This opens a popup which relays details of the positions of the
                                                career journey, these details can be saved to a printable pdf.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="./journey11.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Journey Overview</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                The first page of the pdf shows general details of the
                                                position requirements for their career journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControlsJourney" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControlsJourney" data-bs-slide="next">
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

export default JourneyCarouselPopup
