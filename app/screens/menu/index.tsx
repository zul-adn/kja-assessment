import { FC, useLayoutEffect, useCallback, useState } from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { observer } from "mobx-react-lite"
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import { saveString } from "@utils/storage"

// Components
import Card from "@components/atom/Card"

// Styles
import styles from "./style"
import { appearanceHook } from "osmicsx"

const MenuScreen: FC<StackScreenProps<NavigatorParamList, "menu">> = (props) => {
  const { navigation } = props
  const [theme, setTheme] = useState(appearanceHook.activeTheme)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Menu",
      headerShown: true,
    })
  }, [theme])

  /**
   * Handle switcher.
   */
  const toggleTheme = useCallback(async () => {
    appearanceHook.switch(theme === "dark" ? "light" : "dark")
    saveString("theme", theme === "dark" ? "light" : "dark")
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme])

  return (
    <SafeAreaView style={styles.container} edges={["left", "top", "right"]}>
      <Card cardStyle={styles.card} onPress={toggleTheme}>
        <Icon
          name="theme-light-dark"
          size={50}
          color={appearanceHook.activeTheme === "dark" ? "white" : "gray-900"}
        />

        <Text style={styles.cardTitle}>
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </Text>
      </Card>
    </SafeAreaView>
  )
}

export default observer(MenuScreen)
