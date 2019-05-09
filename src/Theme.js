import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  typography: {
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
