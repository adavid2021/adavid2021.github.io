function PortfolioItem(props) {
    const goToProject = () => {
        // '/another-page.html'
        window.location.href = props.portfolioLink;
    };
    return (
        <>
            <div className="card pi" onClick={goToProject}>
                <div className="card-title pi-title">
                    <h4>{props.titleText}</h4>
                </div>
                <div className="card-body pi-body">
                    <p>{props.bodyText}</p>
                </div>
            </div>
        </>
    )
}

export default PortfolioItem
