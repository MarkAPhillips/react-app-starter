import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { fonts, colours } from './variables';

import externalFont from '../assets/fonts/OpenSans-Regular-webfont.woff';

export default () => injectGlobal`
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
