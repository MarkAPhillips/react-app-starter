import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lifecycle, compose, withHandlers } from 'recompose';

const propTypes = {
  onRef: PropTypes.string.isRequired,
};

const ChartPanel = styled.div``;

const ChartSvg = styled.svg.attrs({
  width: '800px',
  height: '500px',
})`
.line {
    fill: none;
    stroke: steelblue;
    stroke-width: 2px;
  }`;

function buildChart(elem) {
  return elem;
}

const Chart = ({ onRef }) => (
  <ChartPanel>
    <ChartSvg ref={onRef} />
  </ChartPanel>
);

Chart.propTypes = propTypes;

export default compose(withHandlers(
  () => {
    let elem = null;
    return {
      onRef: () => (ref) => {
        elem = ref;
      },
      drawChart: () => buildChart(elem),
    };
  },
  lifecycle({
    componentDidMount() {
      this.props.drawChart();
    },
  }),
))(Chart);
