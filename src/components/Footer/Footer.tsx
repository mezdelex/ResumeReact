import { useTheme } from '@mui/material/styles'

const Footer = () => {
  const theme = useTheme()

  return (
    <footer style={{
      fontFamily: "sans-serif",
      fontSize: ".7rem",
      padding: "2rem 0",
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
