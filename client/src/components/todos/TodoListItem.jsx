import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { remove, update } from '../../graphql/mutations.graphql';
import { getAll } from '../../graphql/queries.graphql';
import { TodoListItemPanel, ContainerPanel } from './styles';
import { CheckBox } from '../shared';
import { convertQueryToString } from '../../graphql/gqlHelpers';

const defaultProps = {
  todo: {},
};

const query = convertQueryToString(getAll);

const propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export const TodoListItem = ({ todo }) => {
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
        <Mutation mutation={update}>
          { updateMutation => (
            <CheckBox
              id={id}
              completed={completed}
              item={item}
              onChange={(e) => {
                const { checked } = e.target;
                updateMutation({ variables: { id, completed: checked } });
              }}
            />)
          }
        </Mutation>
      </ContainerPanel>
      {isHovering &&
        <Mutation
          mutation={remove}
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
