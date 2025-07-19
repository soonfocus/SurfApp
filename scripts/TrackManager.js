class TrackManager {
  constructor(trackSelector, elementsArray, numElements) {
    this.track = document.querySelector(trackSelector);
    this.elementsArray = elementsArray;
    this.numElements = numElements;
    this.elements = [];
    this.surfer = null;
    this.speed = 5;
  }

  setSurferElement(surferElement) {
    this.surfer = surferElement;
  }

  generateElements() {
    this.elements = [];
    for (let i = 0; i < this.numElements; i++) {
      const elementObj = this.elementsArray[i % this.elementsArray.length];
      this.elements.push({
        offset: elementObj.offset,
        type: elementObj.type,
        delay: elementObj.delay
      });
    }
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
      }, 400);

      // Collision detection loop for this element
      const collisionInterval = setInterval(() => {
        if (this.checkCollision(div)) {
          console.log('Collision detected with', element.type);
          div.style.background = 'yellow'; // Visual feedback
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