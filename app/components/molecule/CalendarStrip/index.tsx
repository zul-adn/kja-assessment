import { FC, memo, useRef, useCallback } from "react"
import Strip, { CalendarStripProps } from "react-native-calendar-strip"

// Components
import Calendar from "@components/atom/Calendar"

// Styles
import { apply } from "@theme"
import styles from "./style"

export interface ICalendarStrip extends CalendarStripProps {
  onHandleDate?: (date: string) => void
}

const CalelndarStrip: FC<ICalendarStrip> = (props) => {
  const { onHandleDate } = props
  const stripRef = useRef<Strip>(null)

  const _handleDate = useCallback((date) => {
    stripRef.current.setSelectedDate(date)
    onHandleDate(date)
  }, [])

  return (
    <Strip
      {...props}
      ref={stripRef}
      scrollable
      daySelectionAnimation={{
        type: "background",
        highlightColor: apply("bg-primary"),
        duration: 100,
      }}
      style={styles.container}
      showMonth={false}
      iconLeft={null}
      iconRight={null}
      dayComponentHeight={70}
      dayComponent={(props) => <Calendar {...props} onPress={_handleDate} />}
    />
  )
}

export default memo(CalelndarStrip)
