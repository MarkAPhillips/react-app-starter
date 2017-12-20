import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lifecycle, compose, withHandlers, shouldUpdate } from 'recompose';
import build from '../utils/chartbuilder';

const propTypes = {
  onRef: PropTypes.func.isRequired,
};

const ChartPanel = styled.div``;

const ChartSvg = styled.svg`
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}`;

const Chart = ({ onRef }) => (
  <ChartPanel>
    <ChartSvg innerRef={onRef} />
  </ChartPanel>
);

Chart.propTypes = propTypes;

export default compose(
  shouldUpdate(() => false),
  withHandlers(() => {
    let elem = null;
    return {
      onRef: () => (ref) => {
        elem = ref;
      },
      drawChart: () => () => build(elem),
    };
  }),
  lifecycle({
    componentDidMount() {
      this.props.drawChart();
    },
  }),
)(Chart);
