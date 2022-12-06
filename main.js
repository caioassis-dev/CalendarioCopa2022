
function createGame(player1, hour, player2, scorePlayer1, scorePlayer2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  <li >
    <h2 >${scorePlayer1}</h2>
    <h2>X</h2>
    <h2>${scorePlayer2}</h2>
  </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
</div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "quinta", createGame('serbia', '16:00', 'brazil', '0', '2'))+
  createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland','1', '0'))+
  createCard("02/12", "sexta", createGame('cameroon', '16:00', 'brazil','1', '0'))+
  createCard("05/12", "segunda", createGame('brazil', '16:00', 'SouthKorea','4', '1'))


