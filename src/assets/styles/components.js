import styled from 'styled-components';
import { colours, fontAwesome } from './variables';

export const Main = styled.main`
    padding: 1em;
`;

export const Header = styled.h1`
    font-size: 1.5em;
`;

export const Section = styled.section``;

export const Button = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = Button.extend`
  background: ${colours.blue};
  color: ${colours.white};
  border: 1px solid ${colours.blue};
`;

export const StandardButton = Button.extend`
  background: transparent;
  color: ${colours.black};
  border: none;
  &:hover {
    text-decoration: underline;
  }
  &:before {
    font-family: "${fontAwesome.family}";
    content: "${fontAwesome.content.fa_minus_square}";
    font-weight: 300;
    margin-right: 4px;
  }
`;


export const Input = styled.input`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em;
  border-radius: 3px;
  border: 1px solid ${colours.grey};
  width:100%;
`;
