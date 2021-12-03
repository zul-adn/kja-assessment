import { FC, memo } from "react"
import { StyleProp, ViewStyle, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Task } from "@models/task/task"
import { observer } from "mobx-react-lite"

// Components
import Card from "@components/atom/Card"

// Styles
import styles from "./style"
import { appearanceHook } from "osmicsx"
import { apply } from "@theme"

interface ITaskCard {
  data: Task
  onPress?: (task: Task) => void
  containerStyle?: StyleProp<ViewStyle>
}

const TaskCard: FC<ITaskCard> = (props) => {
  const { data, onPress, containerStyle } = props

  return (
    <Card cardStyle={[styles.container, containerStyle]} onPress={() => onPress(data)}>
      <Icon
        name={data.completed ? "check-circle" : "circle"}
        size={20}
        color={appearanceHook.activeTheme === "dark" ? apply("blue-700") : apply("gray-250")}
        style={styles.icon}
      />

      <Text style={styles.title}>{data.title}</Text>
    </Card>
  )
}

export default memo(observer(TaskCard))
