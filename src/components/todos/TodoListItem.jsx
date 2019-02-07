import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TodoListItemPanel, ContainerPanel } from './styles';
import { CheckBox, Icon } from '../shared';

const defaultProps = {
  todo: {},
  onStatusChange: _.noop,
};

const propTypes = {
  onStatusChange: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export class TodoListItem extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps
  state = {
    isHovering: false,
  }
  handleMouseHover = () => {
    this.setState({
      isHovering: !this.state.isHovering,
    });
  }
  render() {
    const { todo, onStatusChange } = this.props;
    const { id, completed, item } = todo;
    return (
      <TodoListItemPanel
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <ContainerPanel>
          <CheckBox id={id} completed={completed} onChange={onStatusChange} item={item} />
        </ContainerPanel>
        {this.state.isHovering && <ContainerPanel><Icon iconClassName="fa fa-trash" /></ContainerPanel>}
      </TodoListItemPanel>
    );
  }
}
