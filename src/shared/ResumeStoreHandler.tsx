import { createContext, useState } from "react";
import IProject from "../models/IProject";
import IApp from "../models/IApp";
import IStore from "../models/IStore";
import IRepository from "../models/IRepository";

export const ResumeContext = createContext({} as IStore)

export const ResumeStoreProvider = ({ children }: IApp) => {
  const [projectItems, setProjectItems] = useState([] as Array<IProject>)
  const [repositoryItems, setRepositoryItems] = useState([] as Array<IRepository>)
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [repo, setRepo] = useState("")
  const [sha, setSha] = useState("")
  const [link, setLink] = useState("")
  const store: IStore = {
    projectsStore: {
      projects: [projectItems, setProjectItems]
    },
    repositoriesStore: {
      repos: [repositoryItems, setRepositoryItems],
      date: [date, setDate],
      message: [message, setMessage],
      repo: [repo, setRepo],
      sha: [sha, setSha],
      link: [link, setLink]
    }
  }

  return (
    <ResumeContext.Provider value={store}>
      {children}
    </ResumeContext.Provider >
  )
}
