import axios from 'axios';

export const apiFeedSearch = async (term) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: `${term}`,
      part: 'snippet,id',
      maxResults: '50',
      order: 'date',
    },
    headers: {
      'X-RapidAPI-Key': 'faee0d102emsh92ab4a5fb584e64p175254jsn7bf4893a40bd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log('An Error Occured: ', err.message);
  }
};

export const apiFeedChannel = async (channelId) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/channels',
    params: { part: 'snippet,statistics', id: channelId },
    headers: {
      'X-RapidAPI-Key': 'faee0d102emsh92ab4a5fb584e64p175254jsn7bf4893a40bd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log('An Error Occured: ', err.message);
  }
};

export const apiChannelSearch = async (channelId) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: channelId,
      part: 'snippet,id',
      order: 'date',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'faee0d102emsh92ab4a5fb584e64p175254jsn7bf4893a40bd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log('An Error Occured: ', err.message);
  }
};

export const apiFeedVideoDetail = async (videoId) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: { part: 'contentDetails,snippet,statistics', id: videoId },
    headers: {
      'X-RapidAPI-Key': 'faee0d102emsh92ab4a5fb584e64p175254jsn7bf4893a40bd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log('An Error Occured: ', err.message);
  }
};

export const apiFeedVideoSuggestion = async (videoId) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: videoId,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'faee0d102emsh92ab4a5fb584e64p175254jsn7bf4893a40bd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log('An Error Occured: ', err.message);
  }
};
