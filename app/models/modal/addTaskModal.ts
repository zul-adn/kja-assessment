import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Add task modal store
 */
export const AddTaskModalStore = types
  .model("AddTaskModal")
  .props({
    visible: false,
  })
  .actions((self) => ({
    showModal() {
      self.visible = true
    },
    hideModal() {
      self.visible = false
    },
  }))

type AddTaskModalStore = Instance<typeof AddTaskModalStore>
export interface TaskModalStore extends AddTaskModalStore {}
type TaskModalStoreSnapshotType = SnapshotOut<typeof AddTaskModalStore>
export interface TaskModalStoreSnapshot extends TaskModalStoreSnapshotType {}
export const createAddTaskModalStoreDefault = () =>
  types.optional(AddTaskModalStore, { visible: false })
