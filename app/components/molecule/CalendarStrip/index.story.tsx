import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import CalendarStrip from "./index"

// Styles
import { apply } from "@theme"

declare let module

storiesOf("Calendar Strip", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Dependency Presets", () => (
    <Story>
      <UseCase text="Calendar Example" usage="Example usage of Calendar Strip.">
        <CalendarStrip style={apply("h-80 bg-transparent")} />
      </UseCase>
    </Story>
  ))
