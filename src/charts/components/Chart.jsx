import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle, compose, withHandlers } from 'recompose';
import { ChartPanel, ChartSvg } from '../styles';
import { Header, Section } from '../../common/styles/components';
import build from '../utils/chartBuilder';
import { onFetch, getCatalogueDataForChart } from '../chartReducer';

const propTypes = {
  onRef: PropTypes.func.isRequired,
};

const Chart = ({ onRef }) => (
  <Section>
    <Header>D3 Multiple line chart example</Header>
    <ChartPanel>
      <ChartSvg innerRef={onRef} />
    </ChartPanel>
  </Section>
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

