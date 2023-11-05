import { useTheme } from "@mui/material/styles"
import { useContext } from "react"
import { Context } from "../../providers/StoreProvider"

const Timeline = () => {
  const theme = useTheme()
  const context = useContext(Context)

  return (
    <main style={{
      background: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black,
      color: "black"
    }}>
      Holitaaaa
    </main>
  )
}

export default Timeline
