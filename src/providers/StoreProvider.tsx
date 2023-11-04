import { createContext, useState } from "react";
import IProject from "../models/IProject";
import IStore from "../models/IStore";
import IRepository from "../models/IRepository";
import IReactNode from "../models/IReactNode";

export const Context = createContext<IStore | null>(null)

export const StoreProvider = ({ children }: IReactNode) => {
  const [projectItems, setProjectItems] = useState<Array<IProject>>([])
  const [repositoryItems, setRepositoryItems] = useState<Array<IRepository>>([])
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
    <Context.Provider value={store}>
      {children}
    </Context.Provider >
  )
}
