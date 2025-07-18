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