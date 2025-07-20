class SurferManager {
  constructor(surferId = 'surfer', multiplier = 9) {
    this.surfer = document.getElementById(surferId);
    this.multiplier = multiplier;
    this.surferLeft = 0;
    this.surferRight = 0;
  }

  updatePosition(alpha) {
    let alphaCalculated = 0

    if (alpha <= 180) {
      alphaCalculated = -alpha;
    } else if (alpha > 180) {
      alphaCalculated = 359 - alpha;
    }

    const translateValue = alphaCalculated * this.multiplier;

    this.surfer.style.transform = `translateX(${translateValue}px)`;
    this.updateBounds();
    return alphaCalculated;
  }

  updateBounds() {
    const {
      left,
      right
    } = this.surfer.getBoundingClientRect();
    this.surferLeft = left;
    this.surferRight = right;
  }


  getSurferElement() {
    return this.surfer;
  }

  getSurferBounds() {
    return {
      left: this.surferLeft,
      right: this.surferRight
    };
  }

  handleOrientation = (data) => {
    const {
      alpha
    } = data;
    this.updatePosition(alpha);
  }

  startDetectingPosition() {
    window.addEventListener("deviceorientation", this.handleOrientation);
  }
}