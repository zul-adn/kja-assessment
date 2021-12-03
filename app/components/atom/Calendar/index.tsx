import { FC, memo } from "react"
import { TouchableOpacity, Text } from "react-native"
import { IDayComponentProps } from "react-native-calendar-strip"
import moment, { Duration } from "moment"

// Styles
import styles from "./style"
import { apply } from "@theme"

interface ICalendar extends IDayComponentProps {
  onPress: (date: Duration) => void
}

const Calendar: FC<ICalendar> = (props) => {
  const { selected, onPress } = props
  const date = moment(String(props?.date)).format("D")
  const day = moment(String(props?.date)).format("ddd")

  return (
    <TouchableOpacity
      onPress={() => onPress(props.date)}
      style={[styles.dayContainer, selected && apply("bg-blue-700")]}
      activeOpacity={0.9}
    >
      <Text style={[styles.dateNumber, selected && styles.selectedDate]}>{date}</Text>
      <Text style={[styles.dateName, selected && styles.selectedDate]}>{day}</Text>
    </TouchableOpacity>
  )
}

export default memo(Calendar)
