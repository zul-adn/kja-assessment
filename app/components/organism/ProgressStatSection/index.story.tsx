import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import ProgressStatSection from "./index"

declare let module

storiesOf("Progress Stat Section", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Data Presets", () => (
    <Story>
      <UseCase text="Progress Not Complete" usage="Task progress not completed.">
        <ProgressStatSection inboxProgress={70} meetingProgress={40} tripProgress={80} />
      </UseCase>
      <UseCase text="Progress Completed" usage="Task progress completed.">
        <ProgressStatSection inboxProgress={100} meetingProgress={100} tripProgress={100} />
      </UseCase>
    </Story>
  ))
