import { ReactNode, FC } from "react"
import { View, Text } from "react-native"
import { useHeaderHeight } from "@react-navigation/elements"

// Styles
import styles from "./style"
import { apply } from "@theme"

export interface IHeaderNav {
  title: string
  left?: ReactNode
  right?: ReactNode
}

const HeaderNav: FC<IHeaderNav> = ({ title, left, right }) => {
  const headerHeight = useHeaderHeight()

  return (
    <View style={[styles.container, apply(`h-${headerHeight}`)]}>
      <View style={styles.headerLeft}>{left}</View>

      <View style={styles.headerTitleContainer}>
        <Text style={apply("text-base font-bold text-gray-900 dark:text-white")}>{title}</Text>
      </View>

      <View style={styles.headerRight}>{right}</View>
    </View>
  )
}

export default HeaderNav
