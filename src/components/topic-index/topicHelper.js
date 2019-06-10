import { getEpisodeNumberFromTitle, getFirstLetter } from '../../titleHelper';

function topicsWithEpisodeNumbers(episodes) {
  return [].concat.apply([], episodes.map((ep) => {
    const subtitle = ep.itunes.subtitle;
    const topicsString = 'Topics: ';
    if (subtitle.includes(topicsString) && ep.enclosure) {
      const episodeNumber = getEpisodeNumberFromTitle(ep.title);
      const date = ep.isoDate;
      return subtitle.split(topicsString)[1].split(', ').map(topic => (
        { topic, episodeNumber, date }
      ))
    }
    return null;
  })
    .filter(ob => ob));
}

export function orderedTopicsWithEpisodes(episodes, order = 'asc') {
  return topicsWithEpisodeNumbers(episodes).sort((a, b) => {
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

export function chronologicalTopicsByDate(episodes) {
  const ob = {};
  const monthMap = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  topicsWithEpisodeNumbers(episodes).reverse().forEach((topicOb) => {
    const year = topicOb.date.substring(0, 4);
    const month = monthMap[topicOb.date.substring(5, 7)];

    if (!ob[year]) {
      ob[year] = {};
    }

    if (!ob[year][month]) {
      ob[year][month] = [];
    }

    ob[year][month].push(topicOb);
  });

  return ob;
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
