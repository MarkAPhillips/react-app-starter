import styled from 'styled-components';
import { fontAwesome, colours } from '../../../assets/styles/variables';

export const TodoItemText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding-left: 32px;
`;

export const CheckBoxPanel = styled.div`
  padding: 0.2em;
  font-size: 1.2em;
  > input { opacity: 0; }
  > input + label {
    &:before {
      font-family: "${fontAwesome.family}";
      content: "${fontAwesome.content.fa_square}";
      font-weight: 300;
      margin-left: -15px;
    }
  }
  > input:checked + label {
    &:before {
      content: "${fontAwesome.content.fa_checked_square}";
      font-weight: 900;
      color: ${colours.green};
    }
  }
`;

export const CheckBoxLabel = styled.label`
  display: inline-block;
`;

