import { connect } from "@theme"
import { ViewStyle, TextStyle } from "react-native"

type CalendarStripStyle = {
  dayContainer: ViewStyle
  dateNumber: TextStyle
  dateName: TextStyle
  selectedDate: TextStyle
}

export default connect<CalendarStripStyle>({
  dayContainer:
    "rounded-2xl bg-white dark:bg-gray-500 items-center justify-center px-2 mx-2 w-45 h-60",
  dateNumber: "font-bold text-base text-gray-900 dark:text-white mb-1",
  dateName: "font-regular text-xs text-gray-900 dark:text-white",
  selectedDate: "text-white",
})
