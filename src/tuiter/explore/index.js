import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faCog} from "@fortawesome/free-solid-svg-icons";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="mb-2">
                <div className="d-flex mb-2 position-relative">
                    <FontAwesomeIcon icon={faSearch} className="position-absolute wd-search-icon"/>
                    <input className="w-100 border border-secondary-subtle rounded-pill py-1 ps-5 me-4"
                           placeholder="Search Tuiter"/>
                    <a href="explore-settings.html"><FontAwesomeIcon icon={faCog} size={"2x"}/></a>
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                </ul>
            </div>
            <div className="position-relative mb-2">
                <img className="w-100" src="/images/spacex-starship.png"/>
                <h1 className="position-absolute text-white wd-explore-image-caption">SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
}

export default ExploreComponent;