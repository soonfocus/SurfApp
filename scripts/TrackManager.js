class TrackManager {
  constructor(trackSelector, elementsArray, elementsReps) {
    this.track = document.querySelector(trackSelector);
    this.elementsArray = elementsArray;
    this.elementsReps = elementsReps;
    this.elements = [];
    this.surfer = null;
    this.speed = 5;
    this.defaultDelay = 2000;
  }

  setSurferElement(surferElement) {
    this.surfer = surferElement;
  }

  generateElements() {
    const elementsArrayParsed = this.elementsArray.map((element) => ({
      ...element,
      delay: element.delay ?? this.defaultDelay
    }));
    
    const elementsDuplicated = repeatArray(elementsArrayParsed, this.elementsReps);
    this.elements = elementsDuplicated 
  }

  createDivElement(element) {
    const div = document.createElement('div');
    div.className = `track-element ${element.type}`;
    div.style.left = `calc(50% + ${element.offset}px)`;
    div.style.transition = `top ${this.speed}s linear`;

    div.textContent = element.type;
    return div;
  }

  checkCollision(div) {
    if (!this.surfer) return false;
    const surferRect = this.surfer.getBoundingClientRect();
    const elementRect = div.getBoundingClientRect();
    return !(
      surferRect.right < elementRect.left ||
      surferRect.left > elementRect.right ||
      surferRect.bottom < elementRect.top ||
      surferRect.top > elementRect.bottom
    );
  }

  async animateElements() {
    for (const element of this.elements) {
      const div = this.createDivElement(element);
      this.track.appendChild(div);
      // Force reflow for transition
      void div.offsetWidth;
      setTimeout(() => {
        div.style.top = `${this.track.offsetHeight}px`;
      }, 1000);

      // Collision detection loop for this element
      const collisionInterval = setInterval(() => {
        if (this.checkCollision(div)) {
          console.log('Collision detected with', element.type);
          div.style.background = 'yellow'; 
          clearInterval(collisionInterval);
        }
      }, 30);

      await new Promise(res => setTimeout(res, element.delay));
    }
  }

  start() {
    this.generateElements();
    this.animateElements();
  }
}