import createMuiTheme from 'material-ui/styles/createMuiTheme';

import orange from './orange';
import gray from './gray';
import red from './red';

export default createMuiTheme({
  palette: {
    primary: gray,
    secondary: orange,
    error: red
  }
});