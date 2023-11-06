import { Activity } from "../enums/enums"

export default interface IExperience {
  title: string
  date: string
  activity: Activity
  where: string
  stack: string
  tasks: Array<string>
}
