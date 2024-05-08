import {Link} from "react-router-dom";

function PortfolioItem(props) {
    const goToProject = () => {
        // '/another-page.html'
        window.location.href = props.portfolioLink;
    };
    return (
        <>
            <Link className="card pi" to={props.portfolioLink}>
                <div className="card-title pi-title">
                    <h4>{props.titleText}</h4>
                </div>
                <div className="card-body pi-body">
                    <p>{props.bodyText}</p>
                </div>
            </Link>
            {/*<div className="card pi" onClick={goToProject}>*/}
            {/*    <div className="card-title pi-title">*/}
            {/*        <h4>{props.titleText}</h4>*/}
            {/*    </div>*/}
            {/*    <div className="card-body pi-body">*/}
            {/*        <p>{props.bodyText}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default PortfolioItem
