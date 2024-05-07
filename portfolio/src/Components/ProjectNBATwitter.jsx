import {useState} from "react"
import EnlargedImagePopup from "./EnlargedImagePopup.jsx";

function ProjectNBATwitter() {
    // state variable of query popup showing
    const [isNCAAPopupShowing, setIsNCAAPopupShowing] = useState(false)
    const changeNCAAShowing = (newValue) => {
        setIsNCAAPopupShowing(newValue);
    };

    // state variable of if NBA popup showing
    const [isNBAPopupShowing, setIsNBAPopupShowing] = useState(false)
    const changeNBAShowing = (newValue) => {
        setIsNBAPopupShowing(newValue);
    };

    return (<>
            <div className="portfolio-page global-style">
                <div className="opaque-bg">
                    <div className="c-contact-og scrollable-div">
                        <div className="project-bg">
                            <div className="project-title">
                                <h3>Twitter Sports Data Graphs</h3>
                            </div>
                            <div className="project-upper-band">
                                <div className="project-upper-band-item upper-padding">
                                    <h4>Goals</h4>
                                    <ul>
                                        <li>
                                            Use the Twitter API for R to generate a social media connections graph
                                            between top NBA players and their followers
                                        </li>
                                        <li>
                                            Use Natural Language Processing (NLP) methods to clean large quantities
                                            of text data and generate a word graph showing which words were commonly
                                            used together in tweets about a college football game
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item">
                                    <h4>Skills Developed</h4>
                                    <b>Technical:</b>
                                    <br/>
                                    <p>
                                        I learned how to use an API to obtain large quantities of social media data. I
                                        used R scripts to automate data processing of this text data. Also, I also
                                        generated graphs of to connect network data by ID.
                                    </p>
                                </div>
                                <div className="border-right"/>
                                <div className="project-upper-band-item lower-padding">
                                    <h4>Project Findings</h4>
                                    <p>
                                        Interpreting results of NLP is not always straightforward and requires an
                                        analyst to have some contextual knowledge of the subject matter. For this
                                        project, I follow the NBA making understanding and analyzing its social media
                                        data easier. However, I am not as familiar with college football which made me
                                        look into the event the data was selected from.
                                    </p>
                                </div>
                            </div>
                            <div className="project-lower-band">
                                <h5>NBA Twitter Follower Graph</h5>
                                <p>
                                    I acquired Twitter data using the R Twitter library "rtweet".
                                    With this library, I was able to collect tweet follower data from these four
                                    NBA players:
                                </p>
                                <ul>
                                    <li><strong className="nba-name-text" style={{backgroundColor: "salmon"}}>Stephen
                                        Curry</strong>
                                    </li>
                                </ul>
                                <ul>
                                    <li><strong className="nba-name-text" style={{backgroundColor: "cornflowerblue"}}>Giannis
                                        Antetokounmpo</strong></li>
                                </ul>
                                <ul>
                                    <li><strong className="nba-name-text" style={{backgroundColor: "gold"}}>Lebron
                                        James</strong></li>
                                </ul>
                                <ul>
                                    <li><strong className="nba-name-text" style={{backgroundColor: "limegreen"}}> Jayson
                                        Tatum</strong></li>
                                </ul>
                                <p>
                                    Using this data connected by following ID, I generated a graph where each gray
                                    circle is a Twitter user with a mutual following status with one of
                                    the four central players:
                                </p>
                                <br/>
                                <div className="img-container-nba">
                                    <img src="../../src/assets/nba_graph.png" onClick={changeNBAShowing}
                                         className="hover-pointer contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to enlarge</strong></div>
                                </div>

                                <br/>
                                <br/>
                                <p>
                                    Follower connections on Twitter seem to originate from Stephen Curry which makes
                                    sense as
                                    he is a non-controversial NBA player with many die-hard fans and acquaintances
                                    from his league. Players from other countries have fewer connections as Twitter
                                    is a platform mostly used in the United States. Also, players from well
                                    established and historically dominant franchises (like Lebron James and Jayson
                                    Tatum from the Lakers and the Celtics) have less connections overall.
                                </p>
                                <hr/>
                                <h5>Finding Associated Words in a Text Corpus</h5>
                                <p>In this section of my project, I looked at tweets from a NCAA football game between
                                    the Alabama Red Tide and the Tennessee Volunteers. Before I was able to look at a
                                    graph of the words used in these tweets I processed the whole body of text (the
                                    corpus) into lower case letters, removed punctuation, special symbols, new line
                                    tags, links and ensured the tweets were in english for easier interpretation.
                                    Then I lemmatized the text (essentially categorizing words with the root word) to
                                    reduce redundancy in token words. Last, I collected tokens and groups of two words
                                    together (bigrams). Using the frequencies of the bigrams, I made the graph
                                    below representing bigrams of more than one frequency:</p>
                                <br/>
                                <div className="img-container-nba">
                                    <img src="../../src/assets/ncaa_graph.png" onClick={changeNCAAShowing}
                                         className="hover-pointer contain-this-image"></img>
                                    <div className="enlarge-img-text"><strong>Click to enlarge</strong></div>
                                </div>
                                <br/>
                                <br/>
                                <p>This graph has two main sub-graphs, one of which has "t" at its center and
                                    another with "football" at its center. The first graph portion occurred because of
                                    contractions like "don't" and "didn't" which were separated into their own words
                                    because I removed apostrophes. The next graph portion has more meaning to it and
                                    represents the main content of the tweets. Common bigrams (with their frequency
                                    correlating to the thickness between the connecting lines of the two words)
                                    include "game-day", "big-orange" (which I learned was a nickname for the tennessee
                                    team) and "saturday-3" (which must have been the date of the game).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EnlargedImagePopup isShowing={isNBAPopupShowing} setIsShowing={changeNBAShowing}
                                imgSrc="../../src/assets/nba_graph.png"/>
            <EnlargedImagePopup isShowing={isNCAAPopupShowing} setIsShowing={changeNCAAShowing}
                                imgSrc="../../src/assets/ncaa_graph.png"/>
        </>
    )
}

export default ProjectNBATwitter
