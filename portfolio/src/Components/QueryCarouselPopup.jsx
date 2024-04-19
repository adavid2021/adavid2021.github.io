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
                                <div className="carousel-item active nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query1.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Query 1: Cyclists injured from motor-vehicle-related collisions by
                                            borough</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                In terms of the number of cyclists injured in motor-vehicle-related
                                                accidents,
                                                Brooklyn is the most dangerous, even when accounting for population and
                                                comparing
                                                ratios of cyclists injured over current population density (per square
                                                mile).
                                                <br/>
                                                <br/>
                                                unit: cyclist injuries per person per square mile
                                                <br/>
                                                Brooklyn: 0.206
                                                <br/>
                                                Queens: 0.183
                                                <br/>
                                                Manhattan: 0.082
                                                <br/>
                                                Bronx: 0.053
                                                <br/>
                                                Staten Island: 0.025
                                                <br/>
                                                <br/>
                                                Brooklyn has the most cyclist injuries per person per square mile
                                                followed
                                                by Queens
                                                indicating that Manhattan, despite what I would have assumed, is not
                                                more
                                                dangerous than its surrounding burrows.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query2.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Query 2: Cyclists injured from motor-vehicle-related collisions by
                                            month</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                Every month from June through October has more than 2000 cyclist
                                                injuries which
                                                makes sense as these months have the best biking weather (50 to 85 F,
                                                source:
                                                <a href="https://www.ncei.noaa.gov/">https://www.ncei.noaa.gov/</a>).
                                                August and
                                                July have the most cyclist injuries which
                                                similarly makes sense as they are the two hottest months (on average) in
                                                NYC.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query3.png" alt="..."
                                         className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Query 3: Cyclists injured from motor-vehicle-related collisions by hour of
                                            day</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                The hours of the day where the most injuries occurred were 5 – 7 pm.
                                                This would make sense as this is around when the sun sets, which reduces
                                                driver visibility. It is likely
                                                that more people go biking at this time in general (I confirm this below
                                                when looking at the citi-bike trip data).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query4.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Query 4: Count of Citi Bike trips by trip start hour</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                People start their trips around 5pm, or 6pm although there are many
                                                trips which start at 8am. This might indicate that biking in NYC is
                                                safer in the morning than it is at night.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query5.png"
                                         alt="..." className="contain-this-carousel-image"/>
                                    <div className="popup-carousel-text">
                                        <h6>Query 5: Citi Bike use (hours) by county</h6>
                                        <div className="scrollable-div img-description-container">
                                            <p>
                                                Manhattan has the most Citibike station use. 14,796 hours of Citibike
                                                trips involved arriving at or departing from Manhattan Citibike stations
                                                which makes sense as the county has the most stations (shown below).
                                                Generally, the counties with more stations had the most use.
                                            </p>
                                        </div>
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
