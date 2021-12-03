import { useMemo, FC, memo } from "react"
import { StyleProp, ViewStyle, View, Text } from "react-native"
import moment from "moment"
import { Schedule } from "@models/schedule/schedule"

// Components
import Card from "@components/atom/Card"

// Styles
import styles from "./style"
import { apply } from "@theme"

export enum ScheduleCardType {
  "general" = "general",
  "trip" = "trip",
  "meeting" = "meeting",
}

export interface IScheduleCard {
  containerStyle?: StyleProp<ViewStyle>
  data: Schedule
  type: string
}

const ScheduleCard: FC<IScheduleCard> = (props) => {
  const { containerStyle, data, type } = props

  /**
   * Return dynamic color based on type
   */
  const dynamicColor = useMemo(() => {
    switch (type) {
      case ScheduleCardType.general:
        return "blue-700"
      case ScheduleCardType.trip:
        return "cyan-500"
      case ScheduleCardType.meeting:
        return "orange-500"

      default:
        return ""
    }
  }, [type])

  /**
   * Formatted time.
   */
  const formattedTime = useMemo(() => {
    return `${moment(data.timeStart).format("hh:mm a")} - ${moment(data.timeEnd).format("hh:mm a")}`
  }, [data])

  /**
   * Only render category if not null.
   */
  const renderCategory = useMemo(() => {
    return data.category !== null && data.category !== "" ? (
      <Text style={[styles.label, apply(`text-${dynamicColor}`)]}>{data.category}</Text>
    ) : null
  }, [data])

  return (
    <Card cardStyle={[styles.container, containerStyle]}>
      <View style={[styles.type, apply(`bg-${dynamicColor}`)]} />
      <View style={styles.content}>
        {renderCategory}
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    </Card>
  )
}

export default memo(ScheduleCard)
