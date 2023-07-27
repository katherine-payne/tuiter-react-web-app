import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faHashtag,
    faStarOfLife,
    faBell,
    faEnvelope,
    faBookmark,
    faList,
    faUser,
    faCircle,
    faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2] ?? "";

    return (
        <div className="list-group mb-2">
            <a className="list-group-item">
                <FontAwesomeIcon icon={faTwitter}/><span className="d-none d-xl-inline m-1">Tuiter</span>
            </a>
            <Link to="/tuiter" className={`list-group-item list-group-item-action
                    ${active === '' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHome}/><span className="d-none d-xl-inline m-1">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHashtag}/><span className="d-none d-xl-inline m-1">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon icon={faStarOfLife}/><span className="d-none d-xl-inline m-1">Labs</span>
            </Link>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBell}/><span className="d-none d-xl-inline m-1">Notifications</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'messages' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEnvelope}/><span className="d-none d-xl-inline m-1">Messages</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBookmark}/><span className="d-none d-xl-inline m-1">Bookmarks</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'lists' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faList}/><span className="d-none d-xl-inline m-1">Lists</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'profile' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faUser}/><span className="d-none d-xl-inline m-1">Profile</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action
                    ${active === 'more' ? 'active' : ''}`}>
                <span className="fa-layers fa-fw wd-icon-stack me-1">
                    <FontAwesomeIcon icon={faCircle} size={"lg"}/>
                    <FontAwesomeIcon icon={faEllipsis} size={"2xs"} inverse/>
                </span>
                <span className="d-none d-xl-inline">More</span>
            </a>
        </div>
    );
};

export default NavigationSidebar;