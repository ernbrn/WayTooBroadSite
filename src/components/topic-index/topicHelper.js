import { getEpisodeNumberFromTitle, getFirstLetter } from '../../titleHelper';

export function orderedTopicsWithEpisodes(episodes, order = 'asc') {
  const ob = {};
  return [].concat.apply([], episodes.map((ep) => {
    const subtitle = ep.itunes.subtitle;
    const topicsString = 'Topics: ';
    if (subtitle.includes(topicsString) && ep.enclosure) {
      const episodeNumber = getEpisodeNumberFromTitle(ep.title);
      return subtitle.split(topicsString)[1].split(', ').map(topic => (
        { topic, episodeNumber }
      ))
    }
    return null;
  }).filter(ob => ob)).sort((a, b) => {
    const topicA = a.topic.toUpperCase().trim();
    const topicB = b.topic.toUpperCase().trim();

    if (topicA < topicB) {
      return order === 'asc' ? -1 : 1;
    }

    if (topicA > topicB) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });
}

export function orderedTopicsByLetter(episodes, order = 'asc') {
  const ob = {};
  orderedTopicsWithEpisodes(episodes, order).forEach((topicOb) => {
    const firstLetter = topicOb.topic.trim()[0];
    if (!ob[firstLetter]) {
      ob[firstLetter] = []
    }
    ob[firstLetter].push(topicOb)
  });

  return ob;
}

export function topicCount(episodes) {
  return orderedTopicsWithEpisodes(episodes).length;
}
