function LeisurePopup(props) {
    const setIsShowing_ = (event) => {
        props.setIsShowing(event)
    }

    return (<>
            <div className={"popup-bg " + (props.isShowing ? "" : "hidden-div")}>
                <div className="popup-inner">
                    <div className="popup-img-div">
                        <img src="../../src/assets/dresser_img.jpg" className="contain-this-image"></img>
                    </div>
                    <div className="close-button-popup">
                        <i className="fa-solid fa-xmark" id="closeQCarousel"
                           onClick={() => {
                               setIsShowing_(false)
                           }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeisurePopup
