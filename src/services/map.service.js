const axios = require('axios');
const osmtogeojson = require('osmtogeojson');

const getGEOJSON = async ({ left, bottom, right, top }) => {
  const url = `https://www.openstreetmap.org/api/0.6/map?bbox=${left},${bottom},${right},${top}`;
  const { data } = await axios.get(url);
  return osmtogeojson(data);
};

module.exports = {
  getGEOJSON
};
