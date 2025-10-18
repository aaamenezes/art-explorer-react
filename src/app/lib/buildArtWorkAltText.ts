export function buildArtWorkAltText(artWork) {
  return `${artWork.title}, ${artWork.artistDisplayName} (${artWork.artistDisplayBio}), ${artWork.medium}, ${artWork.culture}`;
}
