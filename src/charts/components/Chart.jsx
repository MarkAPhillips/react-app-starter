import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle, compose, withHandlers } from 'recompose';
import build from '../utils/chartbuilder';
import { onFetch } from '../redux/';

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

const mapStateToProps = state => ({
  data: state.chart,
});

Chart.propTypes = propTypes;

const enhance = compose(
  connect(mapStateToProps),
  withHandlers(() => {
    let elem = null;
    return {
      onRef: () => (ref) => {
        elem = ref;
      },
      drawChart: () => data => build(elem, data),
    };
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(onFetch());
    },
    componentDidMount() {
      this.props.drawChart(this.props.data);
    },
    componentWillReceiveProps(nextProps) {
      this.props.drawChart(nextProps.data);
    },
  }),
);

export default enhance(Chart);

