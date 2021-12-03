import { FC, memo, useState, useCallback } from "react"
import {
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  Platform,
  Modal,
  View,
  Text,
} from "react-native"
import { observer } from "mobx-react-lite"
import { useStores } from "@models"

// Components
import Input from "@components/atom/Input"
import Button from "@components/atom/Button"

// Styles
import styles from "./style"
import { apply } from "@theme"
import { appearanceHook } from "osmicsx"

export interface IAddTaskModal {}

const AddTaskModal: FC<IAddTaskModal> = (props) => {
  const { addTaskModal, taskStore } = useStores()
  const [taskTitle, setTaskTitle] = useState("")

  /**
   * Handle input change.
   */
  const setFieldValue = useCallback((name, value) => setTaskTitle(value), [])

  /**
   * Handle when adding task.
   */
  const onAdd = useCallback(() => {
    taskStore.addTask(taskTitle)
    addTaskModal.hideModal()
    setTaskTitle("")
  }, [taskTitle])

  console.tron.log("latest id =>", taskStore.latestId)

  return (
    <Modal
      visible={addTaskModal.visible}
      transparent={true}
      onRequestClose={() => addTaskModal.hideModal()}
    >
      <Pressable
        style={[StyleSheet.absoluteFill, styles.backdrop]}
        onPress={() => addTaskModal.hideModal()}
      />

      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={80}
        >
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Task</Text>
            </View>

            <Input
              name="taskTitle"
              value={taskTitle}
              setFieldValue={setFieldValue}
              placeholder="Task title"
            />

            <View style={styles.footerModal}>
              <Button
                size="medium"
                type="primary"
                title="Cancel"
                buttonStyle={apply("bg-transparent mr-1")}
                textStyle={apply("text-gray-900 dark:text-white")}
                onPress={() => addTaskModal.hideModal()}
              />
              <Button
                size="medium"
                type="primary"
                title="Add"
                buttonStyle={apply("ml-1")}
                onPress={onAdd}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

export default memo(observer(AddTaskModal))
