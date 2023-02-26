const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item d-flex">
            <div class="w-100">
                <p class="text-secondary m-0">${post.topic}</p>
                <p class="m-0">
                    <span class="fw-bold">${post.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="text-secondary"> - ${post.time}</span>
                </p>
                <p class="fw-bold m-0">${post.title}</p>
            </div>
            <img class="ms-2 wd-explore-image"
                 src="../../images/${post.image}"/>
        </li>
    `);
}
export default PostSummaryItem;