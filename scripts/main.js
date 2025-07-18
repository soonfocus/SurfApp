/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const lifeContainer = document.getElementById('life')

btnStart.addEventListener('click', () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';
  timer()
})



SurferPositionMng = new SurferPositionManager();

SurferPositionMng.startDetectingPosition()







