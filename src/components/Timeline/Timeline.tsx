import LabTimeline from "@mui/lab/Timeline"
import timelineData from "../../data/experienceData"
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Typography } from "@mui/material"
import { Code, ControlCamera, ExpandMore, } from "@mui/icons-material"
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, } from "@mui/lab"
import { useState } from "react"
import { useTheme } from "@mui/material/styles"

const Timeline = () => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | boolean>(false)

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false)

  return (
    <main>
      <LabTimeline position="alternate" sx={{ marginY: "0" }} >
        {
          timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ margin: 0 }}>
                  <Code />
                </TimelineDot>
                {timelineData.length - 1 === index ? false : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card>
                  <CardHeader title={item.title} subheader={
                    <Typography fontSize="small" color={
                      theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark
                    }>
                      {item.date} <ControlCamera sx={{ fontSize: "x-small" }} /> {item.where.includes("http") ?
                        <a href={item.where} target="_blank">{item.where}</a> : item.where}
                    </Typography>
                  } />
                  <CardContent>
                    <Accordion expanded={expanded === `stack${item.title}`} onChange={handleChange(`stack${item.title}`)} sx={{
                      display: item.stack.length ? "block" : "none", background: theme.palette.background.paper
                    }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                      >
                        <Typography color={
                          theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark
                        }>
                          Stack
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color={
                          theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark
                        }>
                          {item.stack}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === `tasks${item.title}`} onChange={handleChange(`tasks${item.title}`)} sx={{
                      display: item.tasks.length ? "block" : "none", background: theme.palette.background.paper
                    }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                      >
                        <Typography color={
                          theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.dark
                        }>
                          Tasks
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="span" color={
                          theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.dark
                        }>
                          {item.tasks.map((task, i) => <p key={`${index}${i}`}>{task}</p>)}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </LabTimeline>
    </main>
  )
}

export default Timeline
