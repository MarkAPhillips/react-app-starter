import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

import CLRSTtfFont from '../assets/fonts/theinhardt-ultralight-webfont.ttf';
import CLRSWoffFont from '../assets/fonts/theinhardt-ultralight-webfont.woff';

export default () => injectGlobal`
  ${styledNormalize}
 
  @font-face {
    font-family: 'TheInhardt';
    src: url(${CLRSTtfFont}),
         url(${CLRSWoffFont});
  }

  html, body  {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'TheInhardt';
    padding: 0;
    font-weight: normal;
    background-color:#fff;
    color:#000;
    font-size:18px;
  }
`;
