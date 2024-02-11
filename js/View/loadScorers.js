class loadScorers {
  _parentElement = document.querySelector('.headin');
  _data;
  _scorer = document.querySelector('.scorers');

  _generateMarkup(data) {
    this._data = data;
    console.log(this._data);
    let markup = `
          <table>
          <tr class="col">
          <th>Team</th>
          
                     <th>Player</th>
                     <th></th>
                     <th>Place</th>
                     <th></th>
                     <th>G</th>
                     <th></th>
                     <th>A</th>
                     <th></th>
                     <th class="pad">Penalties</th>
                     <th></th>
                     </tr>
            ${this._data
              .map(function (el, i) {
                return `
                <tr class="col kek"></tr>
                <div class="col"><tr class="col" >
                <td class = "col team" >${el.team_name}</td>
                    <td class = "col player" >${el.player_name}</td>
                    <td></td>
                      <td class="col place">${el.player_place}</td>
                      <td></td>
                      <td class="col goals">${el.goals}</td>
                      <td></td>
                      <td class="col asist">${el.assists ? el.assists : 0}</td>
                      <td></td>
                      
                      <td class="col pad">${el.penalty_goals}</td>
                      
                    </tr></div>`;
              })
              .join('')}
           </table> `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  addHandlerScorers(handler) {
    this._scorer.addEventListener('change', function (e) {
      e.preventDefault();
      let opt = e.target.value;

      handler(opt);
    });
  }
}

export default new loadScorers();
