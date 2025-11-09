let historyStack = [];
let currentIndex = -1;

export function saveSession(url) {
  if (currentIndex < historyStack.length - 1) {
    historyStack = historyStack.slice(0, currentIndex + 1);
  }
  historyStack.push(url);
  currentIndex++;
}

export function getCurrentURL() {
  return historyStack[currentIndex] || '';
}

export function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    return historyStack[currentIndex];
  }
  return null;
}

export function goForward() {
  if (currentIndex < historyStack.length - 1) {
    currentIndex++;
    return historyStack[currentIndex];
  }
  return null;
}
