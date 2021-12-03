import { FC, memo, useCallback } from "react"
import { StyleProp, View, ViewStyle } from "react-native"

// Components
import CircularProgressBar from "@components/atom/CircularProgressBar"

// Styles
import { apply } from "@theme"

export interface ITaskProgress {
  containerStyle?: StyleProp<ViewStyle>
  inboxProgress: number
  meetingProgress: number
  tripProgress: number
}

const TaskProgress: FC<ITaskProgress> = (props) => {
  const { containerStyle, inboxProgress, meetingProgress, tripProgress } = props

  /**
   * Progress trip.
   */
  const ProgressTrip = useCallback(
    () => (
      <CircularProgressBar size={70} width={0} fill={tripProgress} tintColor={apply("cyan-500")} />
    ),
    [],
  )

  /**
   * Progress meeting.
   */
  const ProgressMeeting = useCallback(
    () => (
      <CircularProgressBar
        size={100}
        width={0}
        fill={meetingProgress}
        tintColor={apply("orange-500")}
      >
        {() => <ProgressTrip />}
      </CircularProgressBar>
    ),
    [],
  )

  return (
    <View style={containerStyle}>
      <CircularProgressBar size={130} width={0} fill={inboxProgress} tintColor={apply("blue-700")}>
        {() => <ProgressMeeting />}
      </CircularProgressBar>
    </View>
  )
}

export default memo(TaskProgress)
