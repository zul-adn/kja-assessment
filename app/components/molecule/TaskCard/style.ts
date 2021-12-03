import { connect } from "@theme"
import { TextStyle, ViewStyle } from "react-native"

type Style = {
  container: ViewStyle
  title: TextStyle
  icon: ViewStyle
}

export default connect<Style>({
  container: "row items-center",
  title: "font-bold dark:text-white text-black text-base",
  icon: "mr-2",
})
