import { FC, useMemo, memo } from "react"
import { ScrollView, StyleProp, ViewStyle, View, Text } from "react-native"
import { Project } from "@models/project/project"

// Components
import ProjectCard from "@components/molecule/ProjectCard"

// Styles
import styles from "./style"
import { apply } from "osmicsx"

export interface ITaskSection {
  containerStyle?: StyleProp<ViewStyle>
  list: Project[]
}

const TaskSection: FC<ITaskSection> = (props) => {
  const { containerStyle, list } = props

  /**
   * Render task list
   */
  const renderList = useMemo(() => {
    return list.map((project, projectIndex) => (
      <ProjectCard
        key={projectIndex}
        data={project}
        type={project.type}
        containerStyle={projectIndex !== list.length - 1 && apply("mr-4")}
      />
    ))
  }, [list])

  return (
    <View style={[containerStyle, styles.container]}>
      <Text style={styles.title}>Projects</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {renderList}
      </ScrollView>
    </View>
  )
}

export default memo(TaskSection)
