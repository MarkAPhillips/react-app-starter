import styled from 'styled-components';
import { fontAwesome } from '../../../assets/styles/variables';

export const TodoItemText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding-left: 0.75em;
`;

export const CheckBoxPanel = styled.div`
  padding: 0.2em;
  font-size: 1.1em;
  > input { opacity: 0; }
  > input + label {
    &:before {
      font-family: ${fontAwesome.family};
      content: "${fontAwesome.content.fa_square_o}";
      margin-left: -10px;
    }
  }
  > input:checked + label {
    &:before {
      content: "${fontAwesome.content.fa_checked_square_o}";
    }
  }
`;

export const CheckBoxLabel = styled.label`
  display: inline-block;
`;

