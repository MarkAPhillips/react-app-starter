import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { TodoContainerPanel } from '../styles';
import { TodoAddItem } from './';

const enhance = compose(connect());
const component = () => <TodoContainerPanel><TodoAddItem /></TodoContainerPanel>;

export const TodoContainer = enhance(component);
