const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item d-flex">
            <div className="w-100">
                <p className="m-0">{post.userName} . {post.time}</p>
                <p className="fw-bold m-0">{post.topic}</p>
                <p className="m-0">{post.title}</p>
            </div>
            <img className="ms-2 wd-explore-image"
                 src={`/images/${post.image}`}/>
        </li>
    );
};

export default PostSummaryItem;
