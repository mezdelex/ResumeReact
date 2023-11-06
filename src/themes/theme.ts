import { createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit"
        }
      }
    }
  },
  // dark: mocha
  // light: latte
  // main: frappé
  palette: {
    mode: "dark",
    primary: { // blue
      dark: "#89b4fa",
      light: "#1e66f5",
      main: "#8caaee"
    },
    secondary: { // mauve
      dark: "#cba6f7",
      light: "#8839ef",
      main: "#ca9ee6"
    },
    info: { // flamingo
      dark: "#f2cdcd",
      light: "#dd7878",
      main: "#eebebe"
    },
    error: { // red
      dark: "#f38ba8",
      light: "#d20f39",
      main: "#e78284"
    },
    warning: { // yellow
      dark: "#f9e2af",
      light: "#df8e1d",
      main: "#e5c890"
    },
    success: { // green
      dark: "#a6e3a1",
      light: "#40a02b",
      main: "#a6d189"
    }
  }
})

export default theme
