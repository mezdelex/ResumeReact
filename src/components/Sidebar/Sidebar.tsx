// import { useTheme } from "@mui/material/styles"
import { Drawer } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

interface SidebarProps {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  // const theme = useTheme()

  return (
    <Drawer anchor="right" open={showSidebar} onClose={() => setShowSidebar(!showSidebar)} sx={{
      // TODO: Continue here

    }}>
      <ul style={{ minWidth: "30rem" }} >
        <li>
          <Link to="/">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </Drawer>
  )
}

export default Sidebar
