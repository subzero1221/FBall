import { KEY } from './config.js';

export const myPL = {
  league: {},
  fixtures: {},
  results: {},
  scorers: {},
};

const createPl = function (data) {
  return data;
};

export const loadTable = async function (id) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_standings&league_id=${id}${KEY}`
  );
  const data = await res.json();
  myPL.league = createPl(data);
  console.log(data);
};

export const loadFixtures = async function (id) {
  const from = new Date();
  let year = from.getFullYear().toString();
  let month = (from.getMonth() + 1).toString().padStart(2, '0');
  let day = from.getDate().toString();

  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${year}-${month}-${day}&to=${year}-${+month}-${
      +day + 7
    }&league_id=${id}${KEY}`
  );
  const data = await res.json();
  console.log(data);
  myPL.fixtures = createPl(data);
};

export const loadResults = async function (id) {
  const from = new Date();
  let year = from.getFullYear().toString();
  let month = (from.getMonth() + 1).toString().padStart(2, '0');
  let day = from.getDate().toString();

  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${year}-${month}-${
      day - 7
    }&to=${year}-${+month}-${+day - 1}&league_id=${id}${KEY}`
  );
  const data = await res.json();
  console.log(data);
  myPL.results = createPl(data);
};

export const loadTopScorers = async function (opt) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${opt}${KEY}`
  );
  const data = await res.json();
  myPL.scorers = createPl(data);
};

loadTopScorers();
