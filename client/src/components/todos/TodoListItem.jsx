import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoListItemPanel, ContainerPanel } from './styles';
import { CheckBox } from '../shared';

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

export const TodoListItem = ({ todo, onStatusChange }) => {
  const [isHovering, setHoveringState] = useState(false);

  const handleMouseHover = (currentHovering) => {
    if (isHovering !== currentHovering) {
      setHoveringState(() => currentHovering);
    }
  };

  // TODO replace with delete mutation
  const handleDelete = () => {
  };

  const { id, completed, item } = todo;

  return (
    <TodoListItemPanel
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      <ContainerPanel>
        <CheckBox id={id} completed={completed} onChange={onStatusChange} item={item} />
      </ContainerPanel>
      {isHovering && <ContainerPanel onClick={handleDelete} isAction> <FontAwesomeIcon icon="trash-alt" /></ContainerPanel>}
    </TodoListItemPanel>
  );
};

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;
