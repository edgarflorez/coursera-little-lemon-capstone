export function updateTimes(availableTimes, action) {
  switch (action.type) {
    case "updateDate":
      const date = new Date(action.date);
      return window.fetchAPI(date);
    default:
      return availableTimes;
  }
}

export function initializeTimes() {
  return window.fetchAPI(new Date());
}
