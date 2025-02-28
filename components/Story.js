export default function (story) {
  //console.log(story);
  return `
    <div class="story">
      <div>
        <span class="gray">${story.index || ""}</span>
        <span class="upvote">^</span>
        <a href="${story.url}">${story.title}</a>
        <span>${story.domain}</span>
      </div>
      <div>
        <div class="gray">
          ${story.points} points by ${story.user} ${story.time_ago}
           <a href="#/item?id=${story.id}">
            ${story.comments_count} comments
          </a>
          |
          <span class="favorite" data-story='${JSON.stringify(story)}'>
            <img class="heart" src=${
              story.isFavorite
                ? "./images/heart-icon-filled.svg"
                : "./images/heart-icon.svg"
            }>
            ${story.isFavorite ? "Remove Trom Favorites" : "Add To Favorites"}
          </span>
        </div>
      </div>
    </div>
  `;
}
