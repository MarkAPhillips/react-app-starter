import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fonts, colours } from './variables';

import externalFont from '../../assets/fonts/OpenSans-Regular-webfont.woff';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: ${fonts.family};
    src: url(${externalFont})
  }

  html, body  {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    font-family: ${fonts.family};
    padding: 0;
    font-weight: normal;
    background-color:${colours.white};
    color:${colours.black};
    font-size:${fonts.size};
  }
`;
