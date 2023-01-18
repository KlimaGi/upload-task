import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#62727f', // grey tekstui
            light: '#ffffff', //white
            dark: '#212b35', // pilkai juoda
            contrastText: '#91128b', // purple -  main contrast
        },
        secondary: {
            main: '#b1b5b8', // lighter grey fonui
            light: '#fcf6fc', // light purple
            dark: '#d8aad5', // sviesi purple fonui
            contrastText: '#0fab5b', // green
        },
    },
});