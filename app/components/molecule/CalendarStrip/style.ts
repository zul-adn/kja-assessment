import { connect } from "@theme"
import { ViewStyle } from "react-native"

type CalendarStripStyle = {
  container: ViewStyle
}

export default connect<CalendarStripStyle>({
  container: "h-75 -mx-4 pt-0 pb-0",
})
