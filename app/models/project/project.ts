import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ScheduleCardType } from "@components/molecule/ScheduleCard"

/**
 * Single project model.
 */
export const ProjectModel = types.model("Project").props({
  id: types.identifierNumber,
  category: types.string,
  title: types.string,
  type: types.enumeration("ProjectType", ["general", "trip", "meeting"]),
  date: types.number,
})

type ProjectType = Instance<typeof ProjectModel>
export interface Project extends ProjectType {}
type ProjectSnapshotType = SnapshotOut<typeof ProjectModel>
export interface ProjectSnapshot extends ProjectSnapshotType {}
export const createProjectDefaultModel = () => types.optional(ProjectModel, {})

/**
 * Project Store
 */
export const ProjectStoreModel = types
  .model("ProjectStore")
  .props({
    data: types.optional(types.array(ProjectModel), []),
    fetching: false,
    error: types.string,
  })
  .views((self) => ({
    get homeProject() {
      return self.data
    },
  }))

type ProjectStoreType = Instance<typeof ProjectStoreModel>
export interface ProjectStore extends ProjectStoreType {}
type ProjectStoreSnapshotType = SnapshotOut<typeof ProjectStoreModel>
export interface ProjectStoreSnapshot extends ProjectStoreSnapshotType {}
export const createProjectStoreDefaultModel = () =>
  types.optional(ProjectStoreModel, {
    data: [
      {
        id: 1,
        category: "category",
        title: "Amanda at Ruth's",
        type: "meeting",
        date: 1638356703912,
      },
      {
        id: 2,
        category: "trip",
        title: "Holidays in Norway",
        type: "trip",
        date: 1638615600000,
      },
    ],
    fetching: false,
    error: "",
  })
