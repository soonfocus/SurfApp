/* 
  Element type: "shark", "life", "tube"
*/

class TrackManager {
  constructor(trackSelector, elementsArray, elementsReps, speed, delayAll) {
    this.track = document.querySelector(trackSelector);
    this.touchesElement = document.querySelector('#touches');
    this.elementsArray = elementsArray;
    this.elementsReps = elementsReps;
    this.elements = [];
    this.surfer = null;
    this.speed = speed ?? 6;
    this.defaultDelay = delayAll ?? 3000;
    this.lifeCount = 3;
    this.touches = 0;
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
    div.style.width = `${element.width ?? 300}px`;
    div.style.background = element.type === 'shark' ? 'red' : 'green';

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
          this.touches++;
          this.touchesElement.textContent = this.touches;

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