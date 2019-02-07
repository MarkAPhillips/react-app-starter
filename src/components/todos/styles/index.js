import styled from 'styled-components';
import { colours } from '../../../assets/styles/variables';

export const ContainerPanel = styled.div``;

export const TodoContainerPanel = styled.section`
  border-radius: 7px;
  background-color: ${colours.lightgrey};
  padding: 0.5em;
`;

export const TodoListItemPanel = styled.div`
  display: flex;
  padding: 0.2em;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  &:hover {
    opacity: 0.7;
  }
`;

export const TodoFilterPanel = styled.div``;

export const InputPanel = styled.div`
  width: 60%;
`;

