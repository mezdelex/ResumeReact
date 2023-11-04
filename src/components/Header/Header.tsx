import { ArrowRightAltRounded, DensityMedium } from "@mui/icons-material"
import alejandro from "../../assets/alejandro.jpg"
import { Button, Stack } from "@mui/material"
import theme from "../../themes/theme"

const Header = () => {

  return (
    <header>
      <Stack direction="column">
        <Stack direction="row" justifyContent="end" alignItems="center" sx={{ margin: "1rem 4rem 0 0" }}>
          <Button variant="contained" color="warning" sx={{ paddingY: "1rem" }}>
            <DensityMedium />
          </Button>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <img alt='Alejandro' src={alejandro} style={{ width: "10rem", height: "13rem", borderRadius: "1rem" }} />
          <Stack direction="row" justifyContent="center" alignItems="center" style={{ color: theme.palette.info.dark, fontFamily: "sans-serif" }}>
            <h2>
              polyglotSoftwareDeveloper
            </h2>
            <ArrowRightAltRounded fontSize="large" sx={{ marginLeft: "1rem" }} />
          </Stack>
          <h1 style={{ color: theme.palette.warning.dark, fontFamily: "sans-serif", marginTop: "0" }}   >
            {"{"} Alejandro Conde Gómez {"}"}
          </h1>
          <h3>
            <div>
              <div>
                Last activity:
                <span></span>
              </div>
              <div>
                Commit:
                <a>Link</a>
              </div>
            </div>
            <div>
              Message:
              <span></span>
            </div>
          </h3>
          <div>
            <a href="https://github.com/mezdelex" target="_blank" />
            <a href="https://stackoverflow.com/users/15234817/mezdelex" target="_blank" />
            <a href="https://linkedin.com/in/mezdelex/" target="_blank" />
            <a href="https://reddit.com/user/Mezdelex" />
            <a href="https://www.twitch.tv/mezdelex" target="_blank" />
          </div>
        </Stack>
      </Stack>
    </header >
  )
}

export default Header
