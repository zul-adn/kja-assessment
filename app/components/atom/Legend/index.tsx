import { FC, useMemo, memo } from "react"
import { StyleProp, ViewStyle, View, Text } from "react-native"

// Styles
import styles from "./style"
import { apply } from "@theme"

export interface ILegend {
  containerStyle?: StyleProp<ViewStyle>
  color: string
  label: string | number
}

const Legend: FC<ILegend> = (props) => {
  const { containerStyle, color, label } = props

  /**
   * Memoize the styles
   */
  const dotColor = useMemo(() => {
    return apply(`bg-${color}`)
  }, [color])

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.dot, dotColor]} />

      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default memo(Legend)
