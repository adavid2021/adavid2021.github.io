import QueryCarouselPopup from "./QueryCarouselPopup.jsx";
import {useState} from "react"
import VizCarouselPopup from "./VizCarouselPopup.jsx";
import EnlargedImagePopup from "./EnlargedImagePopup.jsx";

function ProjectNYCBiking() {
    // state variable of query popup showing
    const [isQueryPopupShowing, setIsQueryPopupShowing] = useState(false)
    const changeQueryShowing = (newValue) => {
        setIsQueryPopupShowing(newValue);
    };

    // state variable of if ERD popup showing
    const [isERDPopupShowing, setIsERDPopupShowing] = useState(false)
    const changeERDShowing = (newValue) => {
        setIsERDPopupShowing(newValue);
    };

    // state variable of query popup showing
    const [isVizPopupShowing, setIsVizPopupShowing] = useState(false)
    const changeVizShowing = (newValue) => {
        setIsVizPopupShowing(newValue);
    };

    return (<>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-og scrollable-div">
                        <div className="project-bg">
                            <div className="project-title">
                                <h3>Visualizing NYC Cyclist-Motor Vehicle Accidents</h3>
                            </div>
                            <div className="project-upper-band">
                                <div className="project-upper-band-item upper-padding">
                                    <h4>Goals</h4>
                                    <ul>
                                        <li>
                                            Generate business questions for data which could provide valuable
                                            information to a company or industry
                                        </li>
                                        <li>
                                            Design a relational database linking several sources of related data
                                        </li>
                                        <li>
                                            <b>Extract</b> the data from its original sources, <b>Transform</b> the data
                                            to
                                            fit the
                                            database schema, <b>Load</b> the processed relational data into a database
                                        </li>
                                        <li>
                                            Answer the business questions with queries and visualizations
                                        </li>

                                    </ul>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item">
                                    <h4>Skills Developed</h4>
                                    <b>Technical:</b>
                                    <br/>
                                    <p>
                                        I followed an ETL process to design and implement a relational database with
                                        Python and PostgreSQL.
                                        I maintained changing data dimensions with Python scripts. I also used Tableau
                                        to visualize and derive meaning from large quantities of data.
                                    </p>
                                    <br/>
                                    <b>General:</b>
                                    <br/>
                                    <p>
                                        I communicated findings to my peers and teachers through presentations and
                                        documentation.
                                    </p>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item lower-padding">
                                    <h4>Project Findings</h4>
                                    <p>
                                        I learned about the challenges of pooling data from differing sources and how
                                        in certain ETL projects, most effort goes into pre-processing the data to ensure
                                        seamless implementation into a database.
                                    </p>
                                    <br/>
                                    <p>
                                        I made the following discoveries about cycling injuries and bike rental systems
                                        in
                                        New York:
                                    </p>
                                    <br/>
                                    <ul>
                                        <li>Brooklyn is the most dangerous borough for cyclists</li>
                                        <li>Cycling injuries most frequently occur during the summer and early fall</li>
                                        <li>Most injuries occurred after 5:00 PM</li>
                                        <li>Most rental bike trips occurred after 5:00 PM or around 8:00 AM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-lower-band">
                                <h5>Project Overview</h5>
                                <p>For this project, I used the <a
                                    href="https://www.kaggle.com/datasets/nycopendata/new-York" target={"_blank"}
                                    className="underlined-text">
                                    NYC Open Data dataset
                                </a> from Kaggle. This data included Citi Bike rental data, motor vehicle collision
                                    data,
                                    and other transportation data. I selected this data for the project as biking is a
                                    popular
                                    mode of transportation which with the city's high population density make
                                    cyclist collisions more common than in other U.S. cities.</p>
                                <hr/>
                                <h5>Business Questions</h5>
                                <p>
                                    My two business questions were focused on when and where cyclist collisions happened
                                    and where cycling traffic was. Knowing where collisions are more likely could inform
                                    local officials on where to add traffic signs or ways to warn drivers of cyclists.
                                    These questions are also important to bike rental companies like Citi Bike which
                                    could use this information to determine where to set up new bike rental stations.
                                </p>
                                <ul>
                                    <li>When and where is cycling most dangerous in New York City?</li>
                                    <li>When and where are Citi Bikes most used?</li>
                                </ul>
                                <hr/>
                                <h5>Designing a Relational Database</h5>
                                <p>
                                    To answer these business questions, I needed to combine several tables. The three
                                    csvs
                                    I had access to were the citi_bike_station data, the citi_bike_trip data and the
                                    collision data.
                                    The common connection across these tables was location, so a major design component
                                    in
                                    linking dimensions was location. I separated components of each csv into the
                                    following dimensions:
                                </p>
                                <ul>
                                    <li>Collision Detail Dimension</li>
                                    <li>Collision Location Dimension</li>
                                    <li>Time Dimension</li>
                                    <li>Trip Dimension</li>
                                    <li>Station Dimension</li>
                                    <li>Station Location Dimension</li>
                                </ul>
                                <p>
                                    I used these dimensions to form two fact tables which provide
                                    necessary information to answer the business questions:
                                </p>
                                <ul>
                                    <li>Collision Fact Table</li>
                                    <li>Station Use Fact Table</li>
                                </ul>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeERDShowing}>
                                    <img src="./relation_db.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to enlarge</strong></div>
                                </div>

                                <br/>
                                <br/>
                                <p>
                                    I also documented which slowly changing dimension (SCD) each dimension would need
                                    to correspond with to preserve the structure of the database as it changes over
                                    time.
                                </p>
                                <br/>
                                <h5>ETL</h5>
                                <p>
                                    I first extracted the data from the three csvs. Some of the initial datasets
                                    were very large (particularly the citi bike trip data with 33 million rows) so I
                                    used
                                    BigQuery to take a sample from the dataset.
                                </p>
                                <br/>
                                <p>
                                    Next, I transformed the data through pre-processing. In the Python section of my
                                    ETL,
                                    I used the GeoPy library to
                                    fetch locations from citi bike stations, categorized each station location by
                                    borough
                                    and added each location to the location dimension in a PostgreSQL database using the
                                    psycopg2 library. Next, I deconstructed each unix timestamp into year, month, day,
                                    hour
                                    and minute and inserted each start and end time of a citi bike trip into the time
                                    dimension.
                                    Last, I inserted times of collision into the time dimension.
                                </p>
                                <br/>
                                <p>
                                    I used SQL to generate a staging table to pool the default attributes from the csv
                                    data.
                                    Next, I picked out the attributes I required in my database and made base dimensions
                                    from them.
                                    I did the same thing to generate fact tables. Then, I set foreign keys to link
                                    dimensions.
                                </p>
                                <br/>
                                <h5>Queries and Visualizations</h5>
                                <p>
                                    Once I finished setting up my PostgreSQL database, I was able to finally derive
                                    meaning from
                                    the data.
                                    I wrote five queries to investigate the data and answer the business questions
                                    (click the "View Query Images" button to see them).
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeQueryShowing}>
                                    <img src="./query1.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to see queries</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <p>
                                    Then, I visualized some data from the database to further
                                    understand the data (click the "View Visualization Images" button to see them).
                                </p>
                                <br/>
                                <div className="img-container hover-pointer" onClick={changeVizShowing}>
                                    <img src="./Viz6.png"
                                         className="contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to see visualizations</strong></div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VizCarouselPopup isShowing={isVizPopupShowing} setIsShowing={changeVizShowing}/>
            <QueryCarouselPopup isShowing={isQueryPopupShowing} setIsShowing={changeQueryShowing}/>
            <EnlargedImagePopup isShowing={isERDPopupShowing} setIsShowing={changeERDShowing}
                                imgSrc="./relation_db.png"/>
        </>
    )
}

export default ProjectNYCBiking
