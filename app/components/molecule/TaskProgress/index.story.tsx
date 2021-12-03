import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import TaskProgress from "./index"

declare let module

storiesOf("Task Progress", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Data Presets", () => (
    <Story>
      <UseCase text="Progress Not Complete" usage="Task progress not completed.">
        <TaskProgress inboxProgress={50} meetingProgress={75} tripProgress={45} />
      </UseCase>
      <UseCase text="Progress Completed" usage="Task progress completed.">
        <TaskProgress inboxProgress={100} meetingProgress={100} tripProgress={100} />
      </UseCase>
    </Story>
  ))
