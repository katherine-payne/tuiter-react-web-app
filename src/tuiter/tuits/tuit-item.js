import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faX} from "@fortawesome/free-solid-svg-icons";

import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };

    return (
        <li className="list-group-item d-flex">
            <img className="rounded-circle wd-post-image me-3"
                 src={`/images/${tuit.image}`}/>
            <div className="w-100">
                <span>
                    <span className="fw-bold">{tuit.userName}</span>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary mx-2"/>
                    {tuit.handle}
                    <span> · </span>
                    {tuit.time}
                    <FontAwesomeIcon icon={faX}
                                     className="text-secondary m-1 float-end"
                                     onClick={() => deleteTuitHandler(tuit._id)}>
                    </FontAwesomeIcon>
                </span>
                <p className="">{tuit.tuit}</p>
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
};

export default TuitItem;