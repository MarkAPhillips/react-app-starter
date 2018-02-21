import styled from 'styled-components';
import { colours } from './variables';

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
`;

export const PrimaryButton = Button.extend`
  background: ${colours.blue};
  color: ${colours.white};
  border: 2px solid ${colours.blue};
  &:hover {
    opacity: 0.8;
  }
`;


export const Input = styled.input`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border-radius: 3px;
  border: 1px solid ${colours.grey};
  width:100%;
`;
