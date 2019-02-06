import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TodoListItemPanel } from './styles';
import { CheckBox } from '../shared';

const defaultProps = {
  todo: {},
  handleStatusChange: _.noop,
};

const propTypes = {
  handleStatusChange: PropTypes.func,
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
    const { todo, handleStatusChange } = this.props;
    const { id, completed, item } = todo;
    return (
      <TodoListItemPanel
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div>
          <CheckBox id={id} completed={completed} onChange={handleStatusChange} item={item} />
        </div>
        {this.state.isHovering && <div><i className="fa fa-trash" aria-hidden="true" /></div>}
      </TodoListItemPanel>
    );
  }
}
