import styled from 'styled-components';
import { colours } from '../../../assets/styles/variables';

export const ContainerPanel = styled.div``;

export const TodoContainerPanel = styled.section`
  border-radius: 7px;
  background-color: ${colours.lightgrey};
  padding: 1em;
`;

export const TodoListItemPanel = styled.div`
  display: flex;
  padding: 0.2em;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  &:hover {
    opacity: 0.7;
  }
`;

export const TodoListPanel = styled.div`
  padding: 0.5em;
  background-color: ${colours.white};
  margin: 12px 0;
`;

export const TodoFilterPanel = styled.div``;

export const InputPanel = styled.div`
  width: 400px;
`;

