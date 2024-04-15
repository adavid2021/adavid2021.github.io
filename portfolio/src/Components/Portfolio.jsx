import PortfolioItem from "./PortfolioItem.jsx";

function Portfolio() {
    const nightmareBodyText = "How can machine learning help us to understand the causes of " +
        "and prevent nightmares?"
    const cyclistVisualizationBody = "Which New York boroughs are the most dangerous for bikers and why?"
    return (
        <>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-a">
                        <div className="c-portfolio-b">
                            <PortfolioItem titleText="Predicting Nightmares with Machine Learning"
                                           bodyText={nightmareBodyText}
                                           portfolioLink="/project_cnrc"/>
                        </div>

                        <div className="c-portfolio-b">
                            <PortfolioItem titleText="Visualizing NYC Cyclist-Motor Vehicle Accidents"
                                           bodyText={cyclistVisualizationBody}
                                           portfolioLink="/project_nyc_biking"/>
                        </div>
                        {/*<div className="c-portfolio-b">*/}
                        {/*    <div className="c-portfolio-a">*/}
                        {/*        <PortfolioItem titleText="Predicting Nightmares with Machine Learning"*/}
                        {/*                       bodyText={nightmareBodyText}*/}
                        {/*                       portfolioLink="/project_cnrc"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="c-portfolio-a">*/}
                        {/*        <PortfolioItem titleText="Visualizing NYC Cyclist-Motor Vehicle Accidents"*/}
                        {/*                       bodyText={cyclistVisualizationBody}*/}
                        {/*                       portfolioLink="/project_nyc_biking"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="c-portfolio-b">*/}
                        {/*    <div className="c-portfolio-a">*/}
                        {/*        <PortfolioItem titleText="test title" bodyText="test body text"*/}
                        {/*                       portfolioLink="/about"/>*/}
                        {/*    </div>*/}
                        {/*    /!*<div className="c-portfolio-a">*!/*/}
                        {/*    /!*    <PortfolioItem titleText="test title" bodyText="test body text"*!/*/}
                        {/*    /!*                   portfolioLink = "/"/>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
