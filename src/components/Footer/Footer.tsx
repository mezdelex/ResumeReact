import { useTheme } from '@mui/material/styles'

const Footer = () => {
  const theme = useTheme()

  return (
    <footer style={{
      background: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black,
      fontFamily: "sans-serif",
      fontSize: ".7rem",
      paddingTop: "2rem",
      textAlign: "center"
    }}>
      <span style={{
        color: theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark
      }}>
        To Vim or not to Vim
      </span>
    </footer>
  )
}

export default Footer
