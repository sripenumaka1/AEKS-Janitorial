# Cleaning process media (home page)

Keep these files in **`src/assets/`** with the **same base names** you already use—only the **extensions** need to be web-friendly:

| Your file | Use this in `src/assets/` |
|-----------|---------------------------|
| Photo was `.HEIC` | **`suruimage1.jpg`** (export from HEIC—same name, `.jpg`) |
| Video clips | **`suruvideo1.mp4`**, **`suruvideo2.mp4`** |

No extra folder under `public/` is required. Vite bundles them from `src/assets` automatically.

**HEIC:** Browsers don’t reliably display HEIC in `<img>`. Export once to JPG and replace/remove the `.HEIC` file so you have `suruimage1.jpg` next to your videos.

**Videos:** If yours are `.mov`, re-export or convert to `.mp4`, or rename the imports in `CleaningProcessMedia.jsx` to match (e.g. `suruvideo1.mov`—MP4 is better for the web).
