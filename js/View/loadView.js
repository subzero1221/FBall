class loadView {
  _parentElement = document.querySelector('.headin');
  _tavi = document.querySelector('.tavi');
  _data;
  _chose = document.querySelector('.chose');

  addHandlerHeader(handler) {
    this._chose.addEventListener('change', function (e) {
      e.preventDefault();
      let country = this.options[this.selectedIndex].getAttribute('data');

      handler(country);
    });
  }

  _generateMarkup(data) {
    this._data = data;
    console.log(this._data);
    let markup = ` 
    <h5 class="headin headin2">${this._data[0].league_name}</h5>
    <table>
    <tr class="col">
               <th>#</th>
               <th>place</th>
               <th>Team</th>
               <th>GP</th>
               <th>W</th>
               <th>D</th>
               <th>L</th>
               <th>GF</th>
               <th>GA</th>
               <th>GD</th>
               <th>PTS</th>
             </tr>
      ${this._data
        .map(function (el, i) {
          return `<tr class="${i < 4 ? 'wpos' : 'pos'} col" >
              <td col >${i + 1}</td>
                <td class="col"><img class="badge" src ="${
                  el.team_badge
                    ? el.team_badge
                    : `https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png`
                }"/></td>
                <td class="col">${el.team_name}</td>
                <td class="col">${el.overall_league_payed}</td>
                <td class="col">${el.overall_league_W}</td>
                <td class="col">${el.overall_league_D}</td>
                <td class="col">${el.overall_league_L}</td>
                <td class="col">${el.overall_league_GF}</td>
                <td class="col">${el.overall_league_GA}</td>
                <td class="col">${
                  el.away_league_GF -
                  el.away_league_GA +
                  (el.home_league_GF - el.home_league_GA)
                }</td>
                <td class="col">${el.overall_league_PTS}</td>
              </tr>`;
        })
        .join('')}
     </table> `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  addHandlerGetId(handler) {
    this._chose.addEventListener('change', function (e) {
      e.preventDefault();
      let opt = e.target.value;

      handler(opt);
    });
  }
}

export default new loadView();
