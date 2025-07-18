
class SurferPositionManager {
  constructor(surferId = 'surfer', multiplier = 3) {
    this.surfer = document.getElementById(surferId);
    this.multiplier = multiplier;
    this.surferLeft = 0;
    this.surferRight = 0;
  }

  updatePosition(alpha) {
  let alpaCalculated = 0

    if (alpha <= 180) {
      alpaCalculated = -alpha;
    } else if (alpha > 180) {
      alpaCalculated = 359 - alpha;
    }

    const translateValue = alpaCalculated * this.multiplier;



    this.surfer.style.transform = `translateX(${translateValue}px)`;
    this.updateBounds();
    return alpaCalculated;
  }

  updateBounds() {
    const { left, right } = this.surfer.getBoundingClientRect();
    this.surferLeft = left;
    this.surferRight = right;
  }

  getSurferBounds() {
    return { left: this.surferLeft, right: this.surferRight };
  }

  handleOrientation = (data) => {
    const { alpha } = data;
    const alphaValue = this.updatePosition(alpha);
    console.log('Alpha', alpha, 'AlphaValue', alphaValue);
  }

  startDetectingPosition(){
    window.addEventListener("deviceorientation", this.handleOrientation);
  }
}

