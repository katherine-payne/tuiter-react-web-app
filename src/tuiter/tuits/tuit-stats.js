import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faThumbsDown, faMessage, faRetweet, faShareNodes} from "@fortawesome/free-solid-svg-icons";

import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex">
            <div className="w-25"><FontAwesomeIcon icon={faMessage} className="me-2"/>{tuit.replies}</div>
            <div className="w-25"><FontAwesomeIcon icon={faRetweet} className="me-2"/>{tuit.retuits}</div>
            <div className="w-25"><FontAwesomeIcon icon={faHeart} className={`me-2 ${tuit.liked ? "wd-text-pink" : ""}`}
                                                   onClick={() => dispatch(updateTuitThunk({
                                                       ...tuit,
                                                       liked: !tuit.liked,
                                                       likes: tuit.likes + (!tuit.liked ? 1 : -1)
                                                   }))}/>{tuit.likes}
            </div>
            <div className="w-25"><FontAwesomeIcon icon={faThumbsDown}
                                                   className={`me-2 ${tuit.disliked ? "wd-text-pink" : ""}`}
                                                   onClick={() => dispatch(updateTuitThunk({
                                                       ...tuit,
                                                       disliked: !tuit.disliked,
                                                       dislikes: tuit.dislikes + (!tuit.disliked ? 1 : -1)
                                                   }))}/>{tuit.dislikes}
            </div>
            <div className="w-25"><FontAwesomeIcon icon={faShareNodes} className="me-2"/></div>
        </div>
    );
};

export default TuitStats;