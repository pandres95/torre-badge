'use strict';

const fetch = require('node-fetch');

module.exports = async (request, response) => {
  const { query: { username } } = request;

  const result = await fetch(`https://torre.bio/api/bios/${username}`);
  return response.send(await result.json());
}
