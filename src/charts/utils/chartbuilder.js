import * as d3 from 'd3';

export default function build(node, data) {
  if (_.isEmpty(data)) {
    return node;
  }
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50,
  };

  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  // parse the date / time
  const parseTime = d3.timeParse('%d-%b-%y');
  // set the ranges
  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);
  // define the line
  const valueline = d3.line().x(d => x(d.date)).y(d => y(d.close));
  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3
    .select(node)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // format the data
  const formattedData = data[0].map(d => ({ date: parseTime(d.date), close: +d.close }));

  // Scale the range of the data
  x.domain(d3.extent(formattedData, d => d.date));
  y.domain([0, d3.max(formattedData, d => d.close)]);
  // Add the valueline path.
  svg.append('path').data([formattedData]).attr('class', 'line').attr('d', valueline);
  // Add the X Axis
  svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));
  // Add the Y Axis
  svg.append('g').call(d3.axisLeft(y));

  return svg;
}