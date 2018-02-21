import styled from 'styled-components';

export const TodoItemText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding-left: 0.75em;
`;
