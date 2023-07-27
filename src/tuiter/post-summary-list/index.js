import {useSelector} from "react-redux";

import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);

    return (
        <ul className="list-group">
            {tuits.map(post => <PostSummaryItem key={post._id} post={post}/>)}
        </ul>
    );
};

export default PostSummaryList;