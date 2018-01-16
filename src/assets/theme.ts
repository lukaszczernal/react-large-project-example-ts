import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createPalette from 'material-ui/styles/createPalette';

let Theme = createMuiTheme({
    palette: createPalette({
        secondary: {
            light: '#ffc359',
            main: '#ffbe45',
            dark: '#ffbe45'
        },
        primary: {
            light: '#656565',
            main: '#565656',
            dark: '#3f3f3f'
        },
        error: {
            main: '#fc3d4b'
        }
    })
});

export default Theme;
