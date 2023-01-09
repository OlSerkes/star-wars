import axios from 'axios';

export async function getPerson(num) {
  return await axios.get(`https://www.swapi.tech/api/people/${num}`);
}

export async function getPlanets(num) {
  return await axios.get(`https://www.swapi.tech/api/planets/${num}`);
}

export async function getStarship(num) {
  return await axios.get(`https://www.swapi.tech/api/starships/${num}`);
}
