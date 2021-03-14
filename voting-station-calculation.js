const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

function chooseStations(arr) {
  let selectedStations = [];
  for (let station of arr) {
    if (station[1] >= 20) {
      if (station[2] === "school" || station[2] === "community centre") {
        selectedStations.push(station[0])
      }
    }
  }
  console.log(selectedStations);
  return selectedStations;
}
