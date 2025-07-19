/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const lifeContainer = document.getElementById('life')

SurferPositionMng = new SurferPositionManager();



const elementTypesWithOffsets = [{
    type: 'shark',
    offset: 20,
    delay: 500
  },
  {
    type: 'dolphin',
    offset: -50,
    delay: 2000
  },
  {
    type: 'wave',
    offset: 80,
    delay: 600
  }
];

const TrackElementMng = new TrackElementManager('#track', elementTypesWithOffsets, 10, 700);


/* Start ride */
btnStart.addEventListener('click', () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';

  timer()

  SurferPositionMng.startDetectingPosition()
  TrackElementMng.start();
})