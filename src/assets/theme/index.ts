import createMuiTheme, { ThemeOptions } from 'material-ui/styles/createMuiTheme';

import orange from './orange';
import gray from './gray';
import red from './red';

export default createMuiTheme({
    palette: {
        primary: {
            light: orange['200'],
            main: orange['600'],
            darken: orange.A200
        },
        secondary: {
            light: gray['200'],
            main: gray['600'],
            darken: gray.A200
        },
        error: red
    }
} as ThemeOptions);
