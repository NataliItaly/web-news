import view from "../utils/view.js";
import store from "../store.js";
import Story from "../components/Story.js";
import checkFavorite from "../utils/checkFavorite.js";

export default function Favorites() {
  const { favorites } = store.getState();
  favorites.forEach((fav) => (fav.isFavorite = true));
  console.log(favorites);

  const hasFavorites = favorites.length > 0;

  view.innerHTML = `
    ${
      hasFavorites
        ? favorites
            .map((favorite, i) => {
              //favorite.isFavorite = true;
              //console.log(favorite);
              return Story({
                ...favorite,
                index: i + 1,
                isFavorite: checkFavorite(favorites, favorite),
              });
            })
            .join("")
        : "You don't have favorites news yet"
    }
  `;

  document.querySelectorAll(".favorite").forEach((favBtn) =>
    favBtn.addEventListener("click", function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorited = checkFavorite(favorites, story);
      story.isFavorite = isFavorited;

      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { favorite: story },
      });

      Favorites();
    })
  );
}
