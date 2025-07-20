/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const backButton = document.getElementById('btn-back')

backButton.addEventListener('click', () => {
  location.reload();
})


SurferMng = new SurferManager();


const {elements, elementsReps, speed, delayAll} = pumpingOneTrack
const TrackMng = new TrackManager('#track', elements, elementsReps, speed, delayAll);


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