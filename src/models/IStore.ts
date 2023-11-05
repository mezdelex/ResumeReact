import { MutableRefObject } from "react"
import IProject from "./IProject"
import IRepository from "./IRepository"

export default interface IStore {
  projectsStore: {
    projects: MutableRefObject<Array<IProject>>
  },
  repositoriesStore: {
    repos: MutableRefObject<Array<IRepository>>
    repo: MutableRefObject<string>
    date: MutableRefObject<string>
    link: MutableRefObject<string>
    message: MutableRefObject<string>
    sha: MutableRefObject<string>
  }
}
