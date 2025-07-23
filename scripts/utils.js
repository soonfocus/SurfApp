/* Create object */
const createObject = (className, id) => {
  const newElement = document.createElement('div');
  newElement.classList.add(className);
  newElement.id = id
  document.body.appendChild(newElement);
}

/* Timer */
const timer = () => {
  let timerInterval;
  let totalSeconds = 0;

  const updateTimerDisplay = () => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('timer').innerText =
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  }

  const startTimer = () => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        totalSeconds++;
        updateTimerDisplay();
      }, 1000);
    }
  }
  startTimer()
}

const countDown = (seconds, element) => {
  return new Promise((resolve) => {
      let counter = seconds;

      const interval = setInterval(() => {
        element.innerText = counter
        counter--;

        if (counter < 0) {
          clearInterval(interval);
          resolve(true); // Resolve the Promise with true
        }
      }, 1000);
    });
}


const duplicateItems = (arr, numberOfRepetitions) => 
    arr.flatMap(i => Array.from({ length: numberOfRepetitions }).fill(i));

const repeatArray = (arr, n) => [].concat(...Array(n).fill(arr));
