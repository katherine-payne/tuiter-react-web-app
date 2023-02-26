import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group d-flex">
               <li class="list-group-item fw-bold">Who to follow</li>
               ${who.map(follow => WhoToFollowListItem(follow)).join("")}
           </ul>
    `);
}
export default WhoToFollowList;