import * as d3 from 'd3';
import buildPredictionData from './predictionHandler';

const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

export default function build(node, data) {
  if (_.isEmpty(data)) {
    return node;
  }
  /** Scales */
  const yearRange = d3.extent(data[0].values, d => d.year);
  // Add additional year to handle prediction
  yearRange[1] += 1;
  // Max popularity will be based on the highest prediction
  const maxPopularity = _(data)
    .map('prediction')
    .flatten()
    .maxBy('high').high;

  const xScale = d3.scaleLinear().domain(yearRange).range([0, width]);
  const yScale = d3.scaleLinear()
    .domain([0, maxPopularity])
    .range([height, 0]);

  /** Axis */
  const xAxis = d3.axisBottom(xScale).ticks(4).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yScale);

  /** Chart set up */
  const svg = d3.select(node)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const line = d3.line().x(d => xScale(d.year)).y(d => yScale(d.popularity));

  // gridlines in x axis function
  const xGridlines = () => d3.axisBottom(xScale).ticks(4);

  // gridlines in y axis function
  const yGridlines = () => d3.axisLeft(yScale);

  const predictionLine = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  svg.append('g').attr('class', 'lines')
    .selectAll('.line-group')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'line-group')
    .append('path')
    .attr('class', 'line')
    .attr('d', d => line(d.values))
    .style('stroke', d => `rgb(${d.rgb.join(',')})`);


  // add the X gridlines
  svg.append('g')
    .attr('class', 'grid')
    .attr('transform', `translate(0,${height})`)
    .call(xGridlines()
      .tickSize(-height)
      .tickFormat(''));

  // add the Y gridlines
  svg.append('g')
    .attr('class', 'grid')
    .call(yGridlines()
      .tickSize(-width)
      .tickFormat(''));
  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('text')
    .attr('transform', `translate(${width / 2} ,${
      height + margin.top + 5})`)
    .style('text-anchor', 'middle')
    .style('font-size', '0.8em')
    .text('Year');

  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - (height / 2))
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style('font-size', '0.8em')
    .text('Popularity');

  /** Build prediction data */
  const lineData = buildPredictionData(data);

  const predictionGroup = svg.append('g')
    .attr('class', 'prediction');
  lineData.forEach((item) => {
    predictionGroup.append('path')
      .attr('d', predictionLine(item.coordinates))
      .attr('stroke', `rgb(${item.rgb.join(',')})`)
      .attr('stroke-width', 1)
      .attr('fill', `rgb(${item.rgb.join(',')})`);
  });
  return svg;
}
