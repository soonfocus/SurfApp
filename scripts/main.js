/* Menu */
const menu = document.getElementById('menu')
const rideContainer = document.getElementById('ride-container')
const prepScreen = document.getElementById('prep-screen')

/* Back button */
const backButton = document.getElementById('btn-back')
backButton.addEventListener('click', () => {
  location.reload();
})

SurferMng = new SurferManager();


/* Prep screen */
const startCommonActions = (TrackMng) => {
  menu.style.display = 'none';
  prepScreen.style.display = 'flex';
  const prepScreenCounter = document.getElementById('counter')

  countDown(5, prepScreenCounter).then((result) => {
    /* Start ride */
    if (result) {
      prepScreen.style.display = 'none';
      rideContainer.style.display = "block";

      SurferMng.startDetectingPosition()
      const surferElement = SurferMng.getSurferElement();
      TrackMng.setSurferElement(surferElement);

      TrackMng.start();
    }
  });
}



/* Random Track */
const btnStartRandom = document.getElementById('btn-start-random')
btnStartRandom.addEventListener('click', () => {
  
  const {elements, elementsReps, speed, delayAll} = randomOneTrack
  const TrackMng = new TrackManager('#track', elements, elementsReps, speed, delayAll);
  
  startCommonActions(TrackMng)
})

/* Pumping Track */
const btnStartPumping = document.getElementById('btn-start-pumping')
btnStartPumping.addEventListener('click', () => {
  
  const {elements, elementsReps, speed, delayAll} = pumpingOneTrack
  const TrackMng = new TrackManager('#track', elements, elementsReps, speed, delayAll);
  
  startCommonActions(TrackMng)
})