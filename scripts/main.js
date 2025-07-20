/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const lifeContainer = document.getElementById('life')

SurferMng = new SurferManager();



const elementsArray = [{
    type: '1',
    offset: 200,
  },
  {
    type: '2',
    offset: -200,
    delay: 3000
  },
  {
    type: '3',
    offset: 10,
  },
  {
    type: '4',
    offset: 100,
  }
];

const TrackMng = new TrackManager('#track', elementsArray, 2);


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