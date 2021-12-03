import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import Badge from "./index"

declare let module

storiesOf("Badge", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Blue Badge" usage="Blue badge.">
        <Badge title="Lorem" color="blue" />
      </UseCase>
      <UseCase text="Red Badge" usage="Red badge.">
        <Badge title="Lorem" color="red" />
      </UseCase>
      <UseCase text="Cyan Badge" usage="Cyan badge.">
        <Badge title="Lorem" color="cyan" />
      </UseCase>
      <UseCase text="Orange Badge" usage="Orange badge.">
        <Badge title="Lorem" color="orange" />
      </UseCase>
    </Story>
  ))
