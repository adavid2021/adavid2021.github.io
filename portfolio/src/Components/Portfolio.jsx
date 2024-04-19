import PortfolioItem from "./PortfolioItem.jsx";

function Portfolio() {
    const nightmareBodyText = "How can machine learning help to understand the causes of " +
        "nightmares?"
    const cyclistVisualizationBody = "Which New York boroughs are the most dangerous for bikers and why?"
    const nbaBody = "How are followers of Lebron James, Stephen Curry, Giannis Antetokounmpo and Jayson Tatum connected on Twitter?"
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

                        <div className="c-portfolio-b">
                            <PortfolioItem titleText="Twitter Sports Data Graphs"
                                           bodyText={nbaBody}
                                           portfolioLink="/project_nba_twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
