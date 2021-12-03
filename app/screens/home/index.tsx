import React, { FC, useCallback, useLayoutEffect } from "react"
import { ScrollView, StatusBar, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { observer } from "mobx-react-lite"
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import { useStores } from "@models"
import { Task } from "@models/task/task"
import moment from "moment"

// Components
import Button from "@components/atom/Button"
import TaskSection from "@components/organism/TaskSection"
import ProjectSection from "@components/organism/ProjectSection"
import ProgressStatSection from "@components/organism/ProgressStatSection"

// Styles
import styles from "./style"
import { appearanceHook } from "osmicsx"
import { apply } from "@theme"

const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = (props) => {
  const { navigation } = props
  const { taskStore, projectStore, addTaskModal } = useStores()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: moment(new Date()).format("dddd, DD"),
      headerLeft: () => (
        <Icon
          name="apps"
          size={30}
          color={apply(appearanceHook.activeTheme === "dark" ? "white" : "gray-900")}
          onPress={() => navigation.navigate("menu")}
        />
      ),
      headerRight: () => (
        <Icon
          name="calendar-month-outline"
          size={25}
          color={apply(appearanceHook.activeTheme === "dark" ? "white" : "gray-900")}
          onPress={() => navigation.navigate("calendar")}
        />
      ),
      headerShown: true,
    })
  }, [appearanceHook])

  /**
   * Handle Task when pressed.
   */
  const handleTaskPress = useCallback((task: Task) => taskStore.toggleCompleted(task), [])

  /**
   * Handle task add.
   */
  const onAddTask = useCallback(() => {
    addTaskModal.showModal()
  }, [])

  return (
    <SafeAreaView style={styles.container} edges={["left", "bottom"]}>
      <StatusBar
        backgroundColor={appearanceHook.activeTheme === "dark" ? apply("gray-900") : apply("white")}
        barStyle={appearanceHook.activeTheme === "dark" ? "light-content" : "dark-content"}
      />

      <ScrollView contentContainerStyle={apply("py-5")} showsVerticalScrollIndicator={false}>
        <ProgressStatSection
          inboxProgress={70}
          meetingProgress={40}
          tripProgress={80}
          containerStyle={apply("mb-5")}
        />
        <ProjectSection list={projectStore.homeProject} containerStyle={apply("mb-5")} />
        <TaskSection list={taskStore.homeTask} handleTaskPress={handleTaskPress} />
      </ScrollView>

      <View style={styles.floatingWrapper}>
        <Button
          buttonStyle={apply("px-2")}
          type="primary"
          size="medium"
          onPress={onAddTask}
          rounded
        >
          <Icon name="plus" color="white" size={40} />
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default observer(HomeScreen)
