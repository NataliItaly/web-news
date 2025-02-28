import view from "../utils/view.js";
import Story from "../components/Story.js";
import url from "../utils/url.js";
import Comment from "../components/Comments.js";

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch {
    hasError = true;
    view.innerHTML = `<div class="error">Error fetch comments</div>`;
  }

  view.innerHTML = `
    <div>${Story(story)}</div>
    <hr>
    ${
      hasComments
        ? story.comments.map((com) => Comment(com)).join("")
        : "No comments"
    }

    `;
}

async function getStory() {
  const id = window.location.hash.split("=")[1];
  // console.log(id);

  const response = await fetch(`${url}/item/${id}`);
  const stories = await response.json();
  return stories;
}
