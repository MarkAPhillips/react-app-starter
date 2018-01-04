function getCoords(prediction, values) {
  const coords = [];
  const startCoords = _.maxBy(values.map(d => ({ x: d.year, y: d.popularity })), 'x');
  const x = startCoords.x + 1;
  coords.push(startCoords, { x, y: prediction.high }, { x, y: prediction.low });
  return coords;
}

export default function buildPredictionData(data) {
  return data.map(item =>
    ({ rgb: item.rgb, coordinates: getCoords(item.prediction, item.values) }));
}
