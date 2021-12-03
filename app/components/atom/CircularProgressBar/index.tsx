import { FC, memo } from "react"
import {
  AnimatedCircularProgress,
  AnimatedCircularProgressProps,
} from "react-native-circular-progress"

// Styles
import { apply } from "@theme"
import { appearanceHook } from "osmicsx"

const CircularProgressBar: FC<AnimatedCircularProgressProps> = (props) => {
  const { children } = props

  return (
    <AnimatedCircularProgress
      {...props}
      width={8}
      backgroundWidth={4}
      backgroundColor={
        appearanceHook.activeTheme === "dark" ? apply("gray-400") : apply("gray-200")
      }
      rotation={0}
      lineCap="round"
    >
      {children}
    </AnimatedCircularProgress>
  )
}

export default memo(CircularProgressBar)
