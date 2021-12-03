import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ScheduleCardType } from "@components/molecule/ScheduleCard"
import moment from "moment"

/**
 * Single schedule model.
 */
export const ScheduleModel = types.model("Schedule").props({
  id: types.identifierNumber,
  category: types.maybeNull(types.string),
  title: types.string,
  type: types.enumeration("ScheduleType", ["meeting", "general", "trip"]),
  date: types.string,
  timeStart: types.number,
  timeEnd: types.number,
})

type ScheduleType = Instance<typeof ScheduleModel>
export interface Schedule extends ScheduleType {}
type ScheduleSnapshotType = SnapshotOut<typeof ScheduleModel>
export interface ScheduleSnapshot extends ScheduleSnapshotType {}
export const createScheduleDefaultModel = () => types.optional(ScheduleModel, {})

/**
 * Schedule store model.
 */
export const ScheduleStoreModel = types
  .model("ScheduleStore")
  .props({
    data: types.optional(types.array(ScheduleModel), []),
    fetching: false,
    error: types.string,
  })
  .views((self) => ({
    filteredSchedule(date: Date) {
      return self.data.filter(
        (schedule) =>
          moment(new Date(schedule.date)).format("YYYY-MM-DD") ===
          moment(new Date(date)).format("YYYY-MM-DD"),
      )
    },
  }))

type ScheduleStoreType = Instance<typeof ScheduleStoreModel>
export interface ScheduleStore extends ScheduleStoreType {}
type ScheduleStoreSnapshotType = SnapshotOut<typeof ScheduleStoreModel>
export interface ScheduleStoreSnapshot extends ScheduleStoreSnapshotType {}
export const createScheduleStoreDefaultModel = () =>
  types.optional(ScheduleStoreModel, {
    data: [
      {
        id: 1,
        title: "Amanda at Ruth's",
        category: "MEETINGS",
        type: "meeting",
        date: "2021-12-04",
        timeStart: 1638266400000,
        timeEnd: 1638270000000,
      },
      {
        id: 2,
        title: "Read online reviews",
        category: "TRIP",
        type: "trip",
        date: "2021-12-04",
        timeStart: 1638342000000,
        timeEnd: 1638345600000,
      },
      {
        id: 3,
        title: "Walk with dog",
        category: null,
        type: "general",
        date: "2021-12-04",
        timeStart: 1638432000000,
        timeEnd: 1638435600000,
      },
    ],
    fetching: false,
    error: "",
  })
