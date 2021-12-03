import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import ScheduleCard, { ScheduleCardType } from "./index"
import { Schedule } from "@models/schedule/schedule"

declare let module

interface ScheduleData extends Schedule {
  type: keyof typeof ScheduleCardType
}

const DATA: ScheduleData[] = [
  {
    id: 1,
    title: "Amanda at Ruth's",
    category: "MEETINGS",
    type: "meeting",
    date: "2021-12-04",
    timeStart: 1638266400000,
    timeEnd: 1638270000000,
  },
  {
    id: 2,
    title: "Read online reviews",
    category: "TRIP",
    type: "trip",
    date: "2021-12-04",
    timeStart: 1638342000000,
    timeEnd: 1638345600000,
  },
  {
    id: 3,
    title: "Walk with dog",
    category: null,
    type: "general",
    date: "2021-12-04",
    timeStart: 1638432000000,
    timeEnd: 1638435600000,
  },
]

storiesOf("Schedule Card", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Meeting Card" usage="Schedule card with type meeting.">
        <ScheduleCard data={DATA[0]} type={DATA[0].type} />
      </UseCase>
      <UseCase text="Trip Card" usage="Schedule card with type trip.">
        <ScheduleCard data={DATA[1]} type={DATA[1].type} />
      </UseCase>
      <UseCase text="General Card" usage="Schedule card with type general.">
        <ScheduleCard data={DATA[2]} type={DATA[2].type} />
      </UseCase>
    </Story>
  ))
