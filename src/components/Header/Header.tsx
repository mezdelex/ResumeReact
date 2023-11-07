import { DensityMedium, GitHub, LinkedIn, Reddit } from "@mui/icons-material"
import alejandro from "../../assets/alejandro.jpg"
import { Button, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useContext, useEffect, useState } from "react"
import { gitHubService } from "../../services/github/gitHubService"
import { Context } from "../../providers/StoreProvider"
import Sidebar from "../Sidebar/Sidebar"

const Header = () => {
  const [_, setMessage] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const context = useContext(Context)
  const theme = useTheme()

  const handleReposAsync = async () => {
    await gitHubService.getRepos(context)
    gitHubService.getUpdatedRepo(context)
    await gitHubService.getLastCommit(context)
    setMessage(context!.repositoriesStore.message.current)
  }

  useEffect(() => {
    handleReposAsync()
  }, [])

  return (
    <header style={{
      fontFamily: "sans-serif",
      marginBottom: "3rem"
    }}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="end" alignItems="center" sx={{ margin: "1rem 4rem 0 0" }}>
          <Button variant="outlined" color="primary" sx={{
            borderRadius: "1rem",
            minWidth: "0",
            paddingY: ".8rem"
          }} onClick={() => setShowSidebar(!showSidebar)}>
            <DensityMedium fontSize="small" />
          </Button>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <img alt='Alejandro' src={alejandro} style={{ width: "10rem", height: "13rem", borderRadius: "1rem" }} />
          <Stack direction="row" justifyContent="center" alignItems="center" style={{
            color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark,
          }}>
            <h2 style={{ fontSize: "medium", marginBottom: "0rem" }}>
              |polyglot_software_developer|
            </h2>
          </Stack>
          <h1 style={{
            color: theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark,
            fontSize: "x-large",
            marginTop: "0"
          }}>
            {"{"} Alejandro Conde Gómez {"}"}
          </h1>
          <h3 style={{
            color: theme.palette.mode === "light" ? theme.palette.secondary.light : theme.palette.secondary.dark,
            marginTop: 0
          }}>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ marginBottom: ".1rem" }}>
              <article style={{ marginRight: "1rem", fontSize: "small" }}>
                Last activity:
                <span style={{
                  marginLeft: ".5rem",
                  color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark
                }}>
                  {context!.repositoriesStore.date.current}
                </span>
              </article>
              <article style={{ fontSize: "small" }}>
                Commit:
                <a href={context!.repositoriesStore.link.current} style={{
                  marginLeft: ".5rem"
                }} target="_blank">
                  Link
                </a>
              </article>
            </Stack>
            <section style={{ maxWidth: "23rem", fontSize: "small", textAlign: "center" }}>
              Message:
              <span style={{
                marginLeft: ".5rem",
                color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark,
              }}>
                {context!.repositoriesStore.message.current}
              </span>
            </section>
          </h3>
          <section style={{
            alignItems: "center",
            color: theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark,
            display: "flex",
            flexDirection: "row",
            gap: ".2rem",
            justifyContent: "center"
          }}>
            <a href="https://github.com/mezdelex" target="_blank"><GitHub sx={{ fontSize: "2.3rem" }} /></a>
            <a href="https://linkedin.com/in/mezdelex/" target="_blank"><LinkedIn sx={{ fontSize: "3rem" }} /></a>
            <a href="https://reddit.com/user/Mezdelex" target="_blank"><Reddit sx={{ fontSize: "2.5rem" }} /></a>
          </section>
        </Stack>
      </Stack>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header >
  )
}

export default Header
