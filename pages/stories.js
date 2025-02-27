import Story from "../components/Story.js";
import view from "../utils/view.js";
import url from "../utils/url.js";

async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
  view.innerHTML = `<div>${
    hasStories
      ? stories.map((story, i) => Story({ ...story, index: i + 1 }))
      : "No stories"
  }</div>`;
}

export default Stories;

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  }
  if (isNewRoute) {
    path = "/newest";
  }

  const response = await fetch(`${url}${path}`);
  const stories = await response.json();
  return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /new
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
