import styled from 'styled-components';

export const TodoContainerPanel = styled.section``;

export const TodoListItemPanel = styled.div``;

export const TodoFilterPanel = styled.div``;

export const TodoItemText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
