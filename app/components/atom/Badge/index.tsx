import { useMemo, FC, memo } from "react"
import { StyleProp, ViewStyle, TextStyle, View, Text } from "react-native"

// Styles
import styles from "./style"
import { apply } from "@theme"

export enum BadgeColor {
  "blue" = "blue",
  "red" = "red",
  "orange" = "orange",
  "cyan" = "cyan",
}

export interface IBadge {
  title: string | number
  color: keyof typeof BadgeColor
  containerStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
}

const Badge: FC<IBadge> = (props) => {
  const { title, color, containerStyle, titleStyle } = props

  /**
   * Get background style.
   */
  const backgroundStyle = useMemo(() => {
    if (color === BadgeColor.blue) return apply("bg-blue-700 bg-opacity-15")
    if (color === BadgeColor.red) return apply("bg-red-500 bg-opacity-15")
    if (color === BadgeColor.orange) return apply("bg-orange-500 bg-opacity-15")
    if (color === BadgeColor.cyan) return apply("bg-cyan-500 bg-opacity-15")
  }, [color])

  /**
   * Get text style.
   */
  const textStyle = useMemo(() => {
    if (color === BadgeColor.blue) return apply("text-blue-700")
    if (color === BadgeColor.red) return apply("text-red-500")
    if (color === BadgeColor.orange) return apply("text-orange-500")
    if (color === BadgeColor.cyan) return apply("text-cyan-500")
  }, [color])

  return (
    <View style={[styles.container, backgroundStyle, containerStyle]}>
      <Text style={[styles.title, textStyle, titleStyle]}>{title}</Text>
    </View>
  )
}

export default memo(Badge)
