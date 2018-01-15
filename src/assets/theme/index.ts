import createMuiTheme, { ThemeOptions } from 'material-ui/styles/createMuiTheme';

import orange from './orange';
import gray from './gray';
import red from './red';

export default createMuiTheme({
  palette: {
    primary: orange,
    secondary: gray,
    error: red
  }
} as ThemeOptions);
