const NavigationSidebar = () => {
    return(`
        <div class="list-group mb-2">
            <i class="list-group-item fab fa-twitter"></i>
            <a href="../home.html" class="list-group-item list-group-item-action">
                <i class="fa fa-home"></i><span class="d-none d-xl-inline m-1">Home</span>
            </a>
            <a href="index.html" class="list-group-item list-group-item-action active">
                <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline m-1">Explore</span>
            </a>
            <a href="../notifications.html" class="list-group-item list-group-item-action">
                <i class="fa fa-bell"></i><span class="d-none d-xl-inline m-1">Notifications</span>
            </a>
            <a href="../messages.html" class="list-group-item list-group-item-action">
                <i class="fa fa-envelope"></i><span class="d-none d-xl-inline m-1">Messages</span>
            </a>
            <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline m-1">Bookmarks</span>
            </a>
            <a href="../lists.html" class="list-group-item list-group-item-action">
                <i class="fa fa-list"></i><span class="d-none d-xl-inline m-1">Lists</span>
            </a>
            <a href="../profile.html" class="list-group-item list-group-item-action">
                <i class="fa fa-user"></i><span class="d-none d-xl-inline m-1">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <span class="fa-stack fa-1x wd-icon-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis-h fa-stack-1x text-black"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <button type="button" class="btn btn-primary w-100 rounded-pill">Tuit</button>
    `);
}
export default NavigationSidebar;