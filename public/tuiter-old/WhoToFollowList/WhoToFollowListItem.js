const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex align-items-center">
            <img class="me-2 rounded-circle wd-follow-image"
                 src="../../images/${who.avatarIcon}"/>
            <div class="w-100">
                <p class="m-0 text-nowrap">
                    <span class="fw-bold">${who.userName}</span>
                    <i class="fa fa-check-circle"></i>
                </p>
                <p class="m-0">@${who.handle}</p>
            </div>
            <button type="button" class="btn btn-primary wd-follow-button wd-round-corners">Follow</button>
        </li>
    `);
}
export default WhoToFollowListItem;