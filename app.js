// Public AniList profile statistics. This only reads public profile data.
const ANILIST_USERNAME = "OSniffle0";
const API_URL = "https://graphql.anilist.co";

const query = `
query ($name: String) {
  User(name: $name) {
    name
    siteUrl
    statistics {
      anime {
        count
        meanScore
        episodesWatched
        minutesWatched
      }
      manga {
        count
        meanScore
        chaptersRead
        volumesRead
      }
    }
  }
}`;

const number = value => Number(value || 0).toLocaleString("en-US");
const decimal = value => Number(value || 0).toFixed(1);
const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node && value !== null && value !== undefined) node.textContent = value;
};

async function loadAniListStats() {
  const state = document.getElementById("sync-state");
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ query, variables: { name: ANILIST_USERNAME } })
    });
    if (!response.ok) throw new Error(`AniList returned HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.errors?.length) throw new Error(payload.errors[0].message);
    const user = payload.data?.User;
    if (!user) throw new Error("AniList user not found.");

    const anime = user.statistics?.anime;
    const manga = user.statistics?.manga;
    if (anime) {
      setText("anime-count", number(anime.count));
      setText("anime-episodes", number(anime.episodesWatched));
      setText("anime-days", decimal(anime.minutesWatched / 1440));
      setText("anime-score", decimal(anime.meanScore));
    }
    if (manga) {
      setText("manga-count", number(manga.count));
      setText("manga-chapters", number(manga.chaptersRead));
      setText("manga-volumes", number(manga.volumesRead));
      setText("manga-score", decimal(manga.meanScore));
    }
    if (state) state.textContent = "LIVE // " + new Date().toLocaleTimeString();
  } catch (error) {
    console.warn("AniList sync unavailable:", error);
    if (state) state.textContent = "OFFLINE // REFERENCE DATA";
  }
}

loadAniListStats();