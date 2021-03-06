import styled from 'styled-components';
import { colours } from './variables';

export const Main = styled.main`
    padding: 1em;
`;

export const Header = styled.h1`
    font-size: 1.5em;
`;

export const Subheader = styled.h2`
    font-size: 1.2em;
`;

export const Section = styled.section``;

export const Button = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border-radius: 3px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: 0.8;
  }
  opacity: ${props => (props.disabled ? '0.8' : '')};
`;

export const PrimaryButton = styled(Button)`
  background: ${colours.blue};
  color: ${colours.white};
  border: 1px solid ${colours.blue};
`;

export const Input = styled.input`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em;
  border-radius: 3px;
  border: 1px solid ${colours.grey};
  width:100%;
`;
