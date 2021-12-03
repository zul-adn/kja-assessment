import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import Input from "./index"

declare let module

let valueInput = ""

storiesOf("Input", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Text Input", () => (
    <Story>
      <UseCase text="Example Text Input" usage="Simple text input.">
        <Input
          value={valueInput}
          name="valueInput"
          setFieldValue={(_, val) => (valueInput = val)}
          placeholder="Enter text"
        />
      </UseCase>
    </Story>
  ))
