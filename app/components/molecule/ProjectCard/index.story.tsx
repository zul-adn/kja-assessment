import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import ProjectCard from "./index"
import { ScheduleCardType } from "@components/molecule/ScheduleCard"
import { Project } from "@models/project/project"

declare let module

interface ProjectData extends Project {
  type: keyof typeof ScheduleCardType
}

const DATA: ProjectData[] = [
  {
    id: 1,
    title: "Amanda at Ruth's",
    category: "meetings",
    type: "meeting",
    date: 1638284809015,
  },
  {
    id: 2,
    title: "Holidays in Norway",
    category: "trip",
    type: "trip",
    date: 1637971200000,
  },
]

storiesOf("Project Card", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Data Presets", () => (
    <Story>
      <UseCase text="Today Project" usage="Project card with date today.">
        <ProjectCard data={DATA[0]} type={DATA[0].type} />
      </UseCase>
      <UseCase
        text="Other Day Project"
        usage="Project card with date not today, yesterday, tomorrow."
      >
        <ProjectCard data={DATA[1]} type={DATA[1].type} />
      </UseCase>
    </Story>
  ))
