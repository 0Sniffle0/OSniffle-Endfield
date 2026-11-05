# 0Sniffle0 // Endfield-inspired AniList Overview

A fan-made, responsive profile dashboard prototype inspired by the clean white/yellow sci-fi presentation of Arknights: Endfield.

## Run locally
1. Extract the ZIP.
2. Open the `OSniffle-Endfield` folder.
3. Double-click `index.html` or use VS Code + Live Server.
4. The page requests public statistics for `0Sniffle0` from AniList's GraphQL API.

No AniList password or access token is used. The page only reads public profile statistics.

## Files
- `index.html` — page structure and dashboard content
- `style.css` — responsive design, scanlines, and CSS operator walk animation
- `app.js` — public AniList GraphQL query and live stat updates
- `assets/` — reserved for original background/animation assets

## Important notes
- The displayed yearly chapter totals and milestone dates are reference values copied from the supplied profile concept. They are not currently fetched from AniList's API.
- The operator is an original abstract SVG silhouette with a simple CSS walking/bobbing animation, not official Arknights artwork.
- This is a separate webpage. AniList's profile About field does not run arbitrary JavaScript, so the full live dashboard cannot simply be pasted into About.
- To show the same styling on AniList itself, use a compatible browser customization such as Automail/custom CSS. That is browser-side styling and may not appear to other visitors.
- GitHub Pages can host the static site after you upload the project to a GitHub repository.
- This is an unofficial fan-made design and is not affiliated with Hypergryph or Gryphline.

## Next improvements
1. Replace the abstract silhouette with an original/licensed operator animation.
2. Add a real landscape background image/video.
3. Tune the CSS against a screenshot of the actual AniList Overview DOM.
4. Deploy to GitHub Pages and link it from the AniList profile.


## Hero video background
The hero section embeds the YouTube video `bGVsJ92mfkY` as a muted, looping background. Autoplay is muted to comply with browser autoplay policies. If the video owner disables embedding, YouTube may prevent it from appearing; in that case, use a downloadable video file that you have permission to use.
