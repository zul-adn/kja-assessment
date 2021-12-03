import * as React from "react"
import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import Legend from "./index"

import { apply } from "@theme"

declare let module

storiesOf("Legend", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Dynamic Legend" usage="Legend with different color and title.">
        <View style={apply("bg-white dark:bg-gray-900 p-2")}>
          <Legend color="blue-700" label="Inbox" containerStyle={apply("mb-1")} />
          <Legend color="orange-500" label="Meeting" containerStyle={apply("mb-1")} />
          <Legend color="cyan-500" label="Trip" containerStyle={apply("mb-1")} />
        </View>
      </UseCase>
    </Story>
  ))
