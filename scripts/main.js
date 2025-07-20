/* Menu */
const btnStart = document.getElementById('btn-start')
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const backButton = document.getElementById('btn-back')

backButton.addEventListener('click', () => {
  location.reload();
})


SurferMng = new SurferManager();

const TrackMng = new TrackManager('#track', pumpingOneTrack, 10);


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