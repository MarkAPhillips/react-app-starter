import styled from 'styled-components';

export const ChartPanel = styled.div``;

export const ChartSvg = styled.svg`
.line {
  stroke-width: 1;
  fill: none;
}

.axis path {
  stroke: black;
}

.grid line {
  stroke: lightgrey;
  stroke-opacity: 0.3;
  shape-rendering: crispEdges;
}

.grid path {
  stroke-width: 0;
}
`;
