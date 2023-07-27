const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
    return (
        <li className="list-group-item d-flex align-items-center">
            <img className="me-3 rounded-circle wd-follow-image"
                 src={`/images/${who.avatarIcon}`}/>
            <div className="w-100">
                <p className="m-0 text-nowrap">
                    <span className="fw-bold">{who.userName}</span>
                </p>
                <p className="m-0">@{who.handle}</p>
            </div>
            <button type="button" className="btn btn-primary wd-follow-button rounded-pill">Follow</button>
        </li>
    );
};

export default WhoToFollowListItem;

