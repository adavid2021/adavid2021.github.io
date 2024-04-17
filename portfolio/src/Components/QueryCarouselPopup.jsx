function QueryCarouselPopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="carousel-outer-div">
                        <div id="carouselExampleControls" className="carousel slide carousel-fade"
                             data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active nyc-img-div"
                                     data-bs-interval="1000000">
                                    <img src="../../src/assets/query1.png"
                                         alt="..."/>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query2.png" alt="..."/>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query3.png" alt="..."/>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query4.png"
                                         alt="..."/>
                                </div>
                                <div className="carousel-item nyc-img-div" data-bs-interval="1000000">
                                    <img src="../../src/assets/query5.png"
                                         alt="..."/>
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
                            <div className="carousel-text-div">
                                <h4>This is a subtitle</h4>
                                <p>this is some other text</p>
                            </div>
                        </div>
                    </div>
                    <div className="close-button-popup">
                        <i className="fa-solid fa-xmark" id="closeQCarousel"
                           onClick={() => {
                               setIsShowing_(false)
                               console.log("hello")
                           }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueryCarouselPopup
