import { month } from '../config';

class loadFixtures {
  _parentElement = document.querySelector('.headin');
  _tavi = document.querySelector('.tavi');
  _data;
  _chose = document.querySelector('.fixtures');

  _generateMarkup(data) {
    this._data = data;
    console.log(this._data);
    let markup = `
      <table>
      <tr class="col">
      <th>Date</th>
                 <th>Time</th>
                 <th>Team</th>
                 <th>Home</th>
                 <th>1</th>
                 <th></th>
                 <th>2</th>
                 <th>Away</th>
                 <th>Team</th>
                 <th>Status</th>
                 
                 </tr>
        ${this._data
          .map(function (el, i) {
            return `
            <tr class="col kek"></tr>
            <div class="col"><tr class="col" >
            <td class = "col" >${el.match_date.slice(5)}</td>
                <td class = "col" >${el.match_time}</td>
                  <td class="col"><img class="badge" src ="${
                    el.team_home_badge
                      ? el.team_home_badge
                      : `https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png`
                  }"/></td>
                  <td class="col">${el.match_hometeam_name}</td>
                  <td class="col">${
                    el.match_hometeam_score ? el.match_hometeam_score : '-'
                  }</td><td>${':'}</td>
                  <td class="col">${
                    el.match_away_score ? el.match_hometeam_score : '-'
                  }</td>
                  <td class="col">${el.match_awayteam_name}</td>
                  <td class="col"><img class="badge" src ="${
                    el.team_away_badge
                      ? el.team_away_badge
                      : `https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png`
                  }"/></td>
                 <td class="col"> ${
                   el.match_status
                     ? el.match_status
                     : el.match_date.slice(8) + ' ' + month
                 }</td>
                </tr></div>`;
          })
          .join('')}
       </table> `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  addHandlerGetId(handler) {
    this._chose.addEventListener('change', function (e) {
      e.preventDefault();
      let id = e.target.value;
      handler(id);
    });
  }
}

export default new loadFixtures();
