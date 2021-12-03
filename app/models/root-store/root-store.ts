import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createTaskStoreDefaultModel } from "@models/task"
import { createProjectStoreDefaultModel } from "@models/project"
import { createScheduleStoreDefaultModel } from "@models/schedule"
import { createAddTaskModalStoreDefault } from "@models/modal"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  taskStore: createTaskStoreDefaultModel(),
  projectStore: createProjectStoreDefaultModel(),
  scheduleStore: createScheduleStoreDefaultModel(),
  addTaskModal: createAddTaskModalStoreDefault()
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
