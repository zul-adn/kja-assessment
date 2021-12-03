import { useMemo, FC, memo } from "react"
import { StyleProp, ViewStyle, Text } from "react-native"
import { ScheduleCardType } from "@components/molecule/ScheduleCard"
import { Project } from "@models/project/project"
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import moment from "moment"

// Components
import Card from "@components/atom/Card"
import Badge, { BadgeColor } from "@components/atom/Badge"

// Styles
import styles from "./style"
import { apply } from "@theme"

export interface IProjectCard {
  data: Project
  type: string
  containerStyle?: StyleProp<ViewStyle>
}

const ProjectCard: FC<IProjectCard> = (props) => {
  const { data, type, containerStyle } = props

  /**
   * Formatted date
   */
  const formattedDate = useMemo(() => {
    return moment().calendar(new Date(data.date), {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "ddd",
      lastDay: "[Yesterday]",
      lastWeek: "ddd",
      sameElse: "ddd",
    })
  }, [data])

  /**
   * Color based on type
   */
  const badgeColor = useMemo(() => {
    if (type === ScheduleCardType.general) return BadgeColor.blue
    if (type === ScheduleCardType.meeting) return BadgeColor.orange
    if (type === ScheduleCardType.trip) return BadgeColor.cyan
  }, [type])

  /**
   * Generate color icon based on type.
   */
  const iconColor = useMemo(() => {
    if (type === ScheduleCardType.general) return apply("blue-700")
    if (type === ScheduleCardType.meeting) return apply("orange-500")
    if (type === ScheduleCardType.trip) return apply("cyan-500")
  }, [type])

  return (
    <Card cardStyle={[styles.container, containerStyle]}>
      <Icon name="timelapse" color={iconColor} size={40} style={apply("mb-3")} />

      <Text style={styles.category}>{data.category}</Text>
      <Text style={styles.title}>{data.title}</Text>

      <Badge title={formattedDate} color={badgeColor} />
    </Card>
  )
}

export default memo(ProjectCard)
