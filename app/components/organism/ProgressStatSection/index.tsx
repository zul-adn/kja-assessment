import { FC, memo } from "react"
import { View, Text } from "react-native"

// Components
import Card from "@components/atom/Card"
import Legend from "@components/atom/Legend"
import TaskProgress, { ITaskProgress } from "@components/molecule/TaskProgress"

// Styles
import styles from "./style"

export interface IProgressStatSection extends ITaskProgress {}

const ProgressStatSection: FC<IProgressStatSection> = (props) => {
  const { containerStyle, inboxProgress, meetingProgress, tripProgress } = props

  return (
    <View style={[styles.container, containerStyle]}>
      <Card cardStyle={styles.card}>
        <View style={styles.leftColumn}>
          <TaskProgress
            inboxProgress={inboxProgress}
            meetingProgress={meetingProgress}
            tripProgress={tripProgress}
          />
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.legendRow}>
            <Legend color="blue-700" label="Inbox" />
            <Text style={styles.percentage}>{`${inboxProgress}%`}</Text>
          </View>

          <View style={styles.legendRow}>
            <Legend color="orange-500" label="Meeting" />
            <Text style={styles.percentage}>{`${meetingProgress}%`}</Text>
          </View>

          <View style={styles.legendRow}>
            <Legend color="cyan-500" label="Trip" />
            <Text style={styles.percentage}>{`${tripProgress}%`}</Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default memo(ProgressStatSection)
