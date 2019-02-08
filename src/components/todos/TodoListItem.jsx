import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { TodoListItemPanel, ContainerPanel } from './styles';
import { CheckBox, Icon } from '../shared';
import { requestDelete } from '../../reducers/todosReducer';

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(requestDelete({ id })),
});

const defaultProps = {
  todo: {},
  onStatusChange: _.noop,
  handleDelete: _.noop,
};

const propTypes = {
  onStatusChange: PropTypes.func,
  handleDelete: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export class TodoListItemComponent extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps
  state = {
    isHovering: false,
  }
  handleDelete = () => {
    const { todo, handleDelete } = this.props;
    handleDelete(todo.id);
  }
  handleMouseHover = (isHovering) => {
    if (this.state.isHovering !== isHovering) {
      this.setState({
        isHovering,
      });
    }
  }
  render() {
    const { todo, onStatusChange } = this.props;
    const { id, completed, item } = todo;
    return (
      <TodoListItemPanel
        onMouseEnter={() => this.handleMouseHover(true)}
        onMouseLeave={() => this.handleMouseHover(false)}
      >
        <ContainerPanel>
          <CheckBox id={id} completed={completed} onChange={onStatusChange} item={item} />
        </ContainerPanel>
        {this.state.isHovering && <ContainerPanel onClick={this.handleDelete}> <Icon iconClassName="fa fa-trash" /></ContainerPanel>}
      </TodoListItemPanel>
    );
  }
}

export const TodoListItem = connect(null, mapDispatchToProps)(TodoListItemComponent);
