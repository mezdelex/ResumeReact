import { useTheme } from "@mui/material/styles"

const Timeline = () => {
  const theme = useTheme()

  return (
    <main style={{
      background: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black,
      color: "black"
    }}>
    </main>
  )
}

export default Timeline
