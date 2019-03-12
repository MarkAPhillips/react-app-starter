import styled from 'styled-components';
import { colours } from '../../../assets/styles/variables';

export const ContainerPanel = styled.div`
  &:hover {
    cursor: ${props => (props.isAction ? 'pointer' : 'auto')};
  }
`;

export const TodoContainerPanel = styled.section`
  border-radius: 7px;
  background-color: ${colours.lightgrey};
  padding: 1em;
`;

export const TodoListItemPanel = styled.div`
  display: flex;
  padding: 0.5em;
  align-items: center;
  width: 90%;
  justify-content: space-between;
`;

export const TodoListPanel = styled.div`
  padding: 0.5em;
  background-color: ${colours.white};
  margin: 12px 0;
  border-radius: 3px;
  > div {
    border-bottom: 1px solid ${colours.lightgrey};
    margin-bottom: 8px;
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    } 
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const TodoFilterPanel = styled.div``;

export const InputPanel = styled.div`
  width: 400px;
`;
