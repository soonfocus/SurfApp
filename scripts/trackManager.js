class TrackElementManager {
  constructor(trackSelector, elementsArray, numElements) {
    this.track = document.querySelector(trackSelector);
    this.elementsArray = elementsArray;
    this.numElements = numElements;
    this.elements = [];
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
    div.textContent = element.type;
    return div;
  }

  async animateElements() {
    for (const element of this.elements) {
      const div = this.createDivElement(element);
      this.track.appendChild(div);
      // Force reflow for transition
      void div.offsetWidth;
      setTimeout(() => {
        div.style.top = `${this.track.offsetHeight}px`;
      }, 50);
      await new Promise(res => setTimeout(res, element.delay));
    }
  }

  start() {
    this.generateElements();
    this.animateElements();
  }
}