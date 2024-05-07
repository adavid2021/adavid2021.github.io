import PortfolioItem from "./PortfolioItem.jsx";

function Portfolio() {
    const nightmareBodyText = "How can machine learning help to understand the causes of " +
        "nightmares?"
    const cyclistVisualizationBody = "Which New York boroughs are the most dangerous for bikers and why?"
    const nbaBody = "How are followers of Lebron James, Stephen Curry, Giannis Antetokounmpo and Jayson Tatum connected on Twitter?"
    const journeyBody = "One of the first websites I developed. It visualizes career paths for employees of a client company."
    const statBody = "What determines how effective an NBA player is on the court?"

    return (
        <>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-og scrollable-div">
                        <div className="r-portfolio">
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
                        </div>
                        <div className="r-portfolio">
                            <div className="c-portfolio-b">
                                <PortfolioItem titleText="Twitter Sports Data Graphs"
                                               bodyText={nbaBody}
                                               portfolioLink="/project_nba_twitter"/>
                            </div>

                            <div className="c-portfolio-b">
                                <PortfolioItem titleText="Quantifying NBA Player Impact"
                                               bodyText={statBody}
                                               portfolioLink="/project_nba_stats"/>
                            </div>
                        </div>
                        <div className="r-portfolio">
                            <div className="c-portfolio-b">
                                <PortfolioItem titleText="Journeys: A Career Navigation Website"
                                               bodyText={journeyBody}
                                               portfolioLink="/project_journeys"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
