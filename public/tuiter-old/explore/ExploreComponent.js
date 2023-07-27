import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
           <div class="mb-2">
               <div class="d-flex mb-2 position-relative">
                   <i class="fa fa-search position-absolute wd-search-icon"></i>
                   <input class="w-100 border border-secondary-subtle rounded-pill py-1 ps-5 me-4 bg-white text-black"
                          placeholder="Search Tuiter"/>
                   <a href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
               </div>
               <ul class="nav nav-tabs">
                   <li class="nav-item">
                       <a class="nav-link active" href="for-you.html">For you</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="trending.html">Trending</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="news.html">News</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="sports.html">Sports</a>
                   </li>
                   <li class="nav-item d-none d-md-block">
                       <a class="nav-link" href="entertainment.html">Entertainment</a>
                   </li>
               </ul>
           </div>
           <div class="position-relative mb-2">
               <img class="w-100" src="../../images/starship.png"/>
               <span class="position-absolute h3 text-white wd-explore-image-caption">SpaceX's Starship</span>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

