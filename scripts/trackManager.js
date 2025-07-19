class TrackElementManager {
  constructor(trackSelector, elementTypesWithOffsets, numElements) {
    this.track = document.querySelector(trackSelector);
    this.elementTypesWithOffsets = elementTypesWithOffsets;
    this.numElements = numElements;
    this.elements = [];
  }

  generateElements() {
    this.elements = [];
    for (let i = 0; i < this.numElements; i++) {
      const elementObj = this.elementTypesWithOffsets[i % this.elementTypesWithOffsets.length];
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
    div.style.position = 'absolute';
    div.style.left = `calc(50% + ${element.offset}px)`;
    div.style.top = '0px';
    div.style.transition = 'top 2s linear';
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
        div.style.top = `${this.track.offsetHeight - 40}px`;
      }, 50);
      await new Promise(res => setTimeout(res, element.delay));
    }
  }

  start() {
    this.generateElements();
    this.animateElements();
  }
}