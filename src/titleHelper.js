export function getEpisodeNumberFromTitle(episodeTitle) {
  return episodeTitle.split(':')[0];
}

export function getFirstLetter(episodeTitle) {
  const episodeTitleWithNumber = episodeTitle.split(': ')[1];
  if (episodeTitleWithNumber) {
    return episodeTitleWithNumber[0].toUpperCase();
  }

  return episodeTitle[0];
}