import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import TaskCard from "./index"

declare let module

const DATA = [
  {
    id: 1,
    title: "Lorem Ipsum",
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
  },
]

const DATA_SELECTED = {
  id: 1,
  title: "Lorem Ipsum",
}

storiesOf("Task Card", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Type Presets", () => (
    <Story>
      <UseCase text="Task Done" usage="Task checked done.">
        <TaskCard data={DATA[0]} selected={DATA_SELECTED} />
      </UseCase>
      <UseCase text="Task Undone" usage="Task not checked / undone.">
        <TaskCard data={DATA[1]} selected={DATA_SELECTED} />
      </UseCase>
    </Story>
  ))
