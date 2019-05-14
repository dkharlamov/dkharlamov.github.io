import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: { main: '#3D424B', contrastText: '#EEECEC' },
    secondary: { main: '#548EAC' },
    text: {
      primary: '#3D424B',
      secondary: '#EEECEC'
    },
    divider: 'rgba(61, 66, 75, 0.25)'
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Fira Sans"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

export default Theme
