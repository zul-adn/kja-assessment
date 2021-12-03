import { connect } from "@theme"
import { ViewStyle } from "react-native"

type CardStyle = {
  container: ViewStyle
}

export default connect<CardStyle>({
  container: "p-4 rounded-lg dark:bg-gray-300 dark:shadow-none bg-white",
})
