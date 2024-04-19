function QueryCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControls2" className="carousel my-carousel-class"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div"
                                     data-bs-interval="1000000">
                                    <img src="../../src/assets/query1.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Cyclists injured from motor-vehicle-related collisions by borough</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query2.png" alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Cyclists injured from motor-vehicle-related collisions by month</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query3.png" alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Cyclists injured from motor-vehicle-related collisions by hour of day</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query4.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Count of Citi Bike trips by trip start hour</p>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query5.png"
                                         alt="..." className="contain-this-image"/>
                                    <div className="popup-carousel-text">
                                        <p>Citi Bike use (hours) by county</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls2" data-bs-slide="next">
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

export default QueryCarouselPopup
