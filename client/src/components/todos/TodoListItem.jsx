import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Mutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTodo } from '../../graphql/mutations.graphql';
import { getAllTodos } from '../../graphql/queries.graphql';
import { TodoListItemPanel, ContainerPanel } from './styles';
import { CheckBox } from '../shared';
import { convertQueryToString } from '../../graphql/gqlHelpers';

const defaultProps = {
  todo: {},
  onStatusChange: _.noop,
};

const query = convertQueryToString(getAllTodos);

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

  const { id, completed, item } = todo;

  return (
    <TodoListItemPanel
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      <ContainerPanel>
        <CheckBox
          id={id}
          completed={completed}
          onChange={onStatusChange}
          item={item}
        />
      </ContainerPanel>
      {isHovering &&
        <Mutation
          mutation={deleteTodo}
          variables={{ id }}
          update={(cache) => {
            const { todos } = cache.readQuery({ query });
            cache.writeQuery({
              query,
              data: { todos: todos.filter(e => e.id !== id) },
            });
          }}
        >
          { deleteMutation => (
            <ContainerPanel
              onClick={deleteMutation}
              isAction
            > <FontAwesomeIcon icon="trash-alt" />
            </ContainerPanel>) }
        </Mutation>}
    </TodoListItemPanel>
  );
};

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;
