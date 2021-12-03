import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Single task model.
 */
export const TaskModel = types.model("Task").props({
  id: types.identifierNumber,
  title: types.string,
  completed: false,
})

type TaskType = Instance<typeof TaskModel>
export interface Task extends TaskType {}
type TaskSnapshotType = SnapshotOut<typeof TaskModel>
export interface TaskSnapshot extends TaskSnapshotType {}
export const createTaskDefaultModel = () => types.optional(TaskModel, {})

/**
 * Task Store
 */
export const TaskStoreModel = types
  .model("TaskStore")
  .props({
    data: types.optional(types.array(TaskModel), []),
    fetching: false,
    error: types.string,
  })
  .views((self) => ({
    get homeTask() {
      return self.data
    },
    get latestId() {
      return self.data[0].id
    },
  }))
  .actions((self) => ({
    addTask(title: string) {
      self.data.unshift({
        id: self.latestId + 1,
        title,
        completed: false,
      })
    },
    updateTask(tasks: Task[]) {
      self.data.replace(tasks)
    },
  }))
  .actions((self) => ({
    toggleCompleted: (task: Task) => {
      const changeCompleted = self.data.map((itemTask) => {
        return {
          ...itemTask,
          completed: itemTask.id === task.id ? !itemTask.completed : itemTask.completed,
        }
      })

      self.updateTask(changeCompleted)
    },
  }))

type TaskStoreType = Instance<typeof TaskStoreModel>
export interface TaskStore extends TaskStoreType {}
type TaskStoreSnapshotType = SnapshotOut<typeof TaskStoreModel>
export interface TaskStoreSnapshot extends TaskStoreSnapshotType {}
export const createTaskStoreDefaultModel = () =>
  types.optional(TaskStoreModel, {
    data: [
      {
        id: 2,
        title: "Lorem Ipsum",
        completed: false,
      },
      {
        id: 1,
        title: "Dolor Sit Amet",
        completed: false,
      },
    ],
    fetching: false,
    error: "",
  })
