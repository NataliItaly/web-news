import view from "../utils/view.js";
import store from "../store.js";
import Story from "../components/Story.js";

export default function Favorites() {
  const { favorites } = store.getState();
  console.log(favorites);

  const hasFavorites = favorites.length > 0;

  view.innerHTML = `
    ${
      hasFavorites
        ? favorites.map((favotite) => Story(favotite))
        : "You don't have favorites news yet"
    }
  `;
}
