'use strict';

module.exports = async (request, response) => {
  const { query: { username } } = request;

  const result = await fetch(`https://torre.bio/api/bios/${search.get('username')}`);
  return response.send(await result.json());
}
