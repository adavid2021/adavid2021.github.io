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
                                    <img src="../../public/Viz1.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 1: Most used Citi Bike stations</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                In this visualization, we see the total hours of bike rental at
                                                particular stations.
                                                The most used stations (from the sample of trips that I took) were in
                                                Manhattan. This might indicate that it might benefit the company to
                                                prioritize station fixes and upgrades in this borough and at these
                                                stations over others.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz2.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 2: Top 6 Most biked months of each year</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                For each of the four years represented by the Citi Bike trip data I
                                                collected, September is the month when bikes are used the most. Citi
                                                Bike might use this information to advertise for bike use at other times
                                                to minimize instances of people not having access to bikes at a station.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz3.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 3: Top 6 Most biked months of each year</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                This bar graph shows how consistently people bike more from July, to
                                                September, but also highlights how January and March of 2016 had a surge
                                                in bike use.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz4.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 4: Map of New York Boroughs</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                In this image, I mapped zipcode areas in NYC.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz5.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 5: Symbol map of motor-vehicle accidents with injured cyclists
                                            in New York
                                            City</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                As shown in the map, Manhattan would seem to be the most dangerous place
                                                to bike however after taking population and population density into
                                                account, more accidents occur Brooklyn.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz6.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 6: Symbol map of motor-vehicle accidents with injured cyclists
                                            in New York (accidents at a location emphasized)
                                            City</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                This map is the same as the previous map but zoomed in to show how more
                                                injuries occur in specific zipcodes (particularly in high population
                                                density ares like Manhattan).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../public/Viz7.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Visualization 7: Cyclist-motor-vehicle collisions in New York City by time
                                            of day</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                For this diagram and in the query it references (query 4) we use the
                                                following time ranges:
                                                <br/>
                                                <br/>
                                                Morning (5am – 11pm)
                                                <br/>
                                                Afternoon (12pm – 4pm)
                                                <br/>
                                                Evening (5pm – 8pm)
                                                <br/>
                                                Night (9pm – 4am)
                                                <br/>
                                                <br/>
                                                This graphic highlights how in the evening and the afternoon, cycling
                                                injuries are much more common.
                                            </p>
                                        </div>
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
