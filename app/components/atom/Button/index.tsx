import { useMemo, FC, memo } from "react"
import { PressableProps, StyleProp, ViewStyle, TextStyle, Text } from "react-native"

// Components
import Base from "./base"

// Styles
import styles from "./style"
import { apply } from "@theme"

enum ButtonSize {
  "small" = "small",
  "medium" = "medium",
  "large" = "large",
}

enum ButtonType {
  "primary" = "primary",
  "secondary" = "secondary",
}

export interface IButton extends PressableProps {
  size: keyof typeof ButtonSize
  type: keyof typeof ButtonType
  rounded?: boolean
  title?: string | number
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button: FC<IButton> = (props) => {
  const { buttonStyle, textStyle, rounded, title, size, type } = props

  /**
   * Get size style
   */
  const sizeStyle = useMemo(() => {
    if (size === "small") {
      return styles.small
    }
    if (size === "medium") {
      return styles.medium
    }
    if (size === "large") {
      return styles.large
    }
  }, [size])

  /**
   * Get background style
   */
  const backgroundStyle = useMemo(() => {
    if (type === "primary") {
      return apply(`bg-blue-700 ${props?.disabled ? "bg-opacity-75" : "bg-opacity-100"}`)
    }
    if (type === "secondary") {
      return apply(`bg-red-500 ${props?.disabled ? "bg-opacity-75" : "bg-opacity-100"}`)
    }
  }, [type, props?.disabled])

  /**
   * Get text size style
   */
  const textSizeStyle = useMemo(() => {
    if (size === "small") {
      return styles.labelSmall
    }
    if (size === "medium") {
      return styles.labelMedium
    }
    if (size === "large") {
      return styles.labelLarge
    }
  }, [size])

  return (
    <Base
      {...props}
      style={[styles.container, sizeStyle, backgroundStyle, rounded && styles.rounded, buttonStyle]}
    >
      {props.children ? (
        props.children
      ) : (
        <Text style={[textSizeStyle, apply("text-white"), textStyle]}>{title}</Text>
      )}
    </Base>
  )
}

export default memo(Button)
