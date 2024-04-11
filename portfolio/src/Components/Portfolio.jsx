import PortfolioItem from "./PortfolioItem.jsx";

function Portfolio() {
    return (
        <>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-a">
                        <div className="c-portfolio-b">
                            <div className="c-portfolio-a">
                                <PortfolioItem titleText="Predicting Nightmares with Machine Learning" bodyText="test body text"
                                               portfolioLink = "/project_cnrc"/>
                            </div>
                            <div className="c-portfolio-a">
                                <PortfolioItem titleText="test title" bodyText="test body text"
                                               portfolioLink = "/contact"/>
                            </div>
                        </div>
                        <div className="c-portfolio-b">
                            <div className="c-portfolio-a">
                                <PortfolioItem titleText="test title" bodyText="test body text"
                                               portfolioLink = "/about"/>
                            </div>
                            {/*<div className="c-portfolio-a">*/}
                            {/*    <PortfolioItem titleText="test title" bodyText="test body text"*/}
                            {/*                   portfolioLink = "/"/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
