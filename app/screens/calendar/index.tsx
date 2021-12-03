import { FC, useLayoutEffect, useState, useCallback, useMemo } from "react"
import { ScrollView, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "@navigators"
import { observer } from "mobx-react-lite"
import { useStores } from "@models"

// Components
import ScheduleCard from "@components/molecule/ScheduleCard"
import CalendarStrip from "@components/molecule/CalendarStrip"

// Styles
import styles from "./style"
import { apply } from "@theme"

const Calendar: FC<StackScreenProps<NavigatorParamList, "calendar">> = (props) => {
  const { navigation } = props
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { scheduleStore } = useStores()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Calendar",
      headerShown: true,
    })
  }, [])

  /**
   * Select date handler.
   */
  const onSelectDate = useCallback((date) => {
    setSelectedDate(date)
  }, [])

  /**
   * Check if list is empty or not.
   */
  const isEmpty = useMemo(() => {
    return scheduleStore.filteredSchedule(selectedDate).length === 0
  }, [selectedDate])

  /**
   * Render schedule list.
   */
  const renderList = useMemo(() => {
    return scheduleStore
      .filteredSchedule(selectedDate)
      .map((schedule, scheduleIndex) => (
        <ScheduleCard
          key={scheduleIndex}
          data={schedule}
          type={schedule.type}
          containerStyle={apply("mb-4")}
        />
      ))
  }, [selectedDate])

  /**
   * Render empty state.
   */
  const renderEmptyState = useMemo(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Schedule Available</Text>
      </View>
    )
  }, [])

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <View style={apply("mt-3")}>
        <CalendarStrip
          style={apply("h-80")}
          selectedDate={selectedDate}
          onHandleDate={onSelectDate}
          startingDate={new Date()}
        />
      </View>

      {isEmpty ? (
        renderEmptyState
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={apply("px-4 pt-4")}>
          {renderList}
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default observer(Calendar)
