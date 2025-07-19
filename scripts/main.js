/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const lifeContainer = document.getElementById('life')

SurferMng = new SurferManager();

const elementsArray = [{
    type: 'shark',
    offset: 200,
    delay: 500
  },
  {
    type: 'dolphin',
    offset: -200,
    delay: 2000
  },
  {
    type: 'dolphin',
    offset: 10,
    delay: 2000
  },
  {
    type: 'wave',
    offset: 100,
    delay: 600
  }
];

const TrackMng = new TrackManager('#track', elementsArray, 10);


/* Start ride */
btnStart.addEventListener('click', () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';

  timer()

  SurferMng.startDetectingPosition()
  const surferElement = SurferMng.getSurferElement();
  TrackMng.setSurferElement(surferElement);
  TrackMng.start();
})