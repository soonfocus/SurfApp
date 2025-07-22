/* Menu */
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const backButton = document.getElementById('btn-back')

backButton.addEventListener('click', () => {
  location.reload();
})


SurferMng = new SurferManager();



/* Start ride */
const startCommonActions = () => {
  menu.style.display = 'none';
  rideContainer.style.display = 'block';
}

const btnStartRandom = document.getElementById('btn-start-random')
btnStartRandom.addEventListener('click', () => {
  startCommonActions()

  const {elements, elementsReps, speed, delayAll} = randomOneTrack
  const TrackMng = new TrackManager('#track', elements, elementsReps, speed, delayAll);

  SurferMng.startDetectingPosition()
  const surferElement = SurferMng.getSurferElement();
  TrackMng.setSurferElement(surferElement);
  TrackMng.start();
})

const btnStartPumping = document.getElementById('btn-start-pumping')
btnStartPumping.addEventListener('click', () => {
  startCommonActions()

  const {elements, elementsReps, speed, delayAll} = pumpingOneTrack
  const TrackMng = new TrackManager('#track', elements, elementsReps, speed, delayAll);

  SurferMng.startDetectingPosition()
  const surferElement = SurferMng.getSurferElement();
  TrackMng.setSurferElement(surferElement);
  TrackMng.start();
})