import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import Button from "./index"

declare let module

storiesOf("Button", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary Button" usage="Primary type button.">
        <Button title="Primary Button" type="primary" size="medium" />
      </UseCase>
      <UseCase text="Secondary Button" usage="Secondary type button.">
        <Button title="Secondary Button" type="secondary" size="medium" />
      </UseCase>
      <UseCase text="Disabled Button" usage="Disabled primary button.">
        <Button title="Disabled Button" type="primary" size="medium" disabled />
      </UseCase>
      <UseCase text="Primary Rounded Button" usage="Primary rounded type button.">
        <Button title="Primary Button" type="primary" size="medium" rounded />
      </UseCase>
      <UseCase text="Secondary Rounded Button" usage="Secondary rounded type button.">
        <Button title="Secondary Button" type="secondary" size="medium" rounded />
      </UseCase>
      <UseCase text="Disabled Rounded Button" usage="Disabled rounded primary button.">
        <Button title="Disabled Button" type="primary" size="medium" rounded disabled />
      </UseCase>
    </Story>
  ))
  .add("Size Presets", () => (
    <Story>
      <UseCase text="Small Button" usage="Small primary type button.">
        <Button title="Small Button" type="primary" size="small" />
      </UseCase>
      <UseCase text="Medium Button" usage="Medium secondary type button.">
        <Button title="Medium Button" type="secondary" size="medium" />
      </UseCase>
      <UseCase text="Large Button" usage="Large disabled primary button.">
        <Button title="Large Button" type="primary" size="large" disabled />
      </UseCase>
    </Story>
  ))
