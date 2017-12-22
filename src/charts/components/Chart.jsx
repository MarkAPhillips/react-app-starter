import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle, compose, withHandlers } from 'recompose';
import { ChartPanel, ChartSvg } from '../styles';
import build from '../utils/chartbuilder';
import { onFetch, getCatalogueDataForChart } from '../redux/';

const propTypes = {
  onRef: PropTypes.func.isRequired,
};

const Chart = ({ onRef }) => (
  <ChartPanel>
    <ChartSvg innerRef={onRef} />
  </ChartPanel>
);

const mapStateToProps = state => ({
  data: getCatalogueDataForChart(state),
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
    componentWillReceiveProps(nextProps) {
      this.props.drawChart(nextProps.data);
    },
  }),
);

export default enhance(Chart);

