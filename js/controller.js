import * as model from './modal.js';
import loadView from './View/loadView.js';
import loadFixtures from './View/loadFixtures.js';
import loadResults from './View/loadResults.js';
import loadScorers from './View/loadScorers.js';

const controlLoadTable = async function () {
  await model.loadTable();
  loadView._generateMarkup(model.myPL.league);
};

const controlLeague = async function (opt) {
  if (!opt) return;
  await model.loadTable(opt);
  loadView._generateMarkup(model.myPL.league);
  console.log(opt);
};

const controlLoadFixtrues = async function (id) {
  await model.loadFixtures(id);
  if (!id) return;
  loadFixtures._generateMarkup(model.myPL.fixtures);
  console.log(id);
};

const controlLoadResults = async function (id) {
  await model.loadResults(id);
  if (!id) return;
  loadResults._generateMarkup(model.myPL.results);
};

const controlLoadTopScorers = async function (opt) {
  await model.loadTopScorers(opt);
  loadScorers._generateMarkup(model.myPL.scorers);
};

loadScorers.addHandlerScorers(controlLoadTopScorers);
loadResults.addHandlerGetId(controlLoadResults);
loadFixtures.addHandlerGetId(controlLoadFixtrues);
loadView.addHandlerGetId(controlLeague);
