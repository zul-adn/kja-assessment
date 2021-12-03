import { ReactNode, FC, memo } from "react"
import { TouchableOpacityProps, TouchableOpacity, StyleProp, ViewStyle } from "react-native"
import { appearanceHook } from "osmicsx"

// Styles
import styles from "./style"

export interface ICard extends TouchableOpacityProps {
  cardStyle?: StyleProp<ViewStyle>
  children?: ReactNode
}

const Card: FC<ICard> = (props) => {
  const { cardStyle, children } = props

  return (
    <TouchableOpacity
      activeOpacity={props.onPress ? 0.9 : 1}
      {...props}
      style={[styles.container, cardStyle]}
    >
      {children}
    </TouchableOpacity>
  )
}

export default memo(Card)
