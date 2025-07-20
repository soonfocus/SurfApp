/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const backButton = document.getElementById('btn-back')

backButton.addEventListener('click', () => {
  location.reload();
})


SurferMng = new SurferManager();



const elementsArray = [{
    type: 'shark',
    offset: 200,
    width: 500
  },
  {
    type: 'shark',
    offset: -200,
    delay: 3000
  },
  {
    type: 'shark',
    offset: 10,
  },
  {
    type: 'shark',
    offset: -100,
  }
];

const TrackMng = new TrackManager('#track', elementsArray, 10);


/* Start ride */
btnStart.addEventListener('click', () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';

  // timer()

  SurferMng.startDetectingPosition()
  const surferElement = SurferMng.getSurferElement();
  TrackMng.setSurferElement(surferElement);
  TrackMng.start();
})