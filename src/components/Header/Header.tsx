import { ArrowRightAltRounded, DensityMedium, GitHub, LinkedIn, Reddit } from "@mui/icons-material"
import alejandro from "../../assets/alejandro.jpg"
import { Button, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useContext, useEffect, useState } from "react"
import { gitHubService } from "../../services/github/gitHubService"
import { Context } from "../../providers/StoreProvider"

const Header = () => {
  const theme = useTheme()
  const context = useContext(Context)
  const [_, setMessage] = useState("")

  const handleReposAsync = async () => {
    await gitHubService.getRepos(context)
    gitHubService.getUpdatedRepo(context)
    await gitHubService.getLastCommit(context)
    setMessage(context!.repositoriesStore.message.current)
  }

  useEffect(() => {
    handleReposAsync()
  }, [])
  console.log("Rendering...")

  return (
    <header style={{
      background: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black,
      fontFamily: "sans-serif"
    }}>
      <Stack direction="column">
        <Stack direction="row" justifyContent="end" alignItems="center" sx={{ margin: "1rem 4rem 0 0" }}>
          <Button variant="contained" color="primary" sx={{ paddingY: "1rem" }}>
            <DensityMedium />
          </Button>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <img alt='Alejandro' src={alejandro} style={{ width: "10rem", height: "13rem", borderRadius: "1rem" }} />
          <Stack direction="row" justifyContent="center" alignItems="center" style={{
            color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark,
          }}>
            <h2>
              polyglotSoftwareDeveloper
            </h2>
            <ArrowRightAltRounded fontSize="large" sx={{ marginLeft: "1rem" }} />
          </Stack>
          <h1 style={{
            color: theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark,
            marginTop: "0"
          }}>
            {"{"} Alejandro Conde Gómez {"}"}
          </h1>
          <h3 style={{
            color: theme.palette.mode === "light" ? theme.palette.secondary.light : theme.palette.secondary.dark,
          }}>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ marginBottom: "1rem" }}>
              <article style={{ marginRight: "1rem" }}>
                Last activity:
                <span style={{
                  marginLeft: ".5rem",
                  color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark
                }}>
                  {context!.repositoriesStore.date.current}
                </span>
              </article>
              <article>
                Commit:
                <a href={context!.repositoriesStore.link.current} style={{
                  marginLeft: ".5rem"
                }} target="_blank">
                  Link
                </a>
              </article>
            </Stack>
            <section style={{ maxWidth: "30rem" }}>
              Message:
              <span style={{
                marginLeft: ".5rem",
                color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark,
              }}>
                {context!.repositoriesStore.message.current}
              </span>
            </section>
          </h3>
          <section style={{}}>
            <a href="https://github.com/mezdelex" target="_blank"><GitHub /></a>
            <a href="https://linkedin.com/in/mezdelex/" target="_blank"><LinkedIn /></a>
            <a href="https://reddit.com/user/Mezdelex" target="_blank"><Reddit /></a>
          </section>
        </Stack>
      </Stack>
    </header >
  )
}

export default Header
