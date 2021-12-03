import { FC, memo, useMemo } from "react"
import { StyleProp, ViewStyle, View, Text } from "react-native"
import { Task } from "@models/task/task"

// Components
import TaskCard from "@components/molecule/TaskCard"

// Styles
import styles from "./style"
import { apply } from "@theme"
import { observer } from "mobx-react-lite"

export interface ITaskSection {
  containerStyle?: StyleProp<ViewStyle>
  list: Task[]
  handleTaskPress: (task: Task) => void
}

const TaskSection: FC<ITaskSection> = (props) => {
  const { containerStyle, list, handleTaskPress } = props

  return (
    <View style={[containerStyle, styles.container]}>
      <Text style={styles.title}>Tasks</Text>
      {list.map((task, taskIndex) => (
        <TaskCard
          key={taskIndex}
          data={task}
          onPress={handleTaskPress}
          containerStyle={apply("mb-2")}
        />
      ))}
    </View>
  )
}

export default memo(observer(TaskSection))
