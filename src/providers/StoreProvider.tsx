import { createContext, useRef } from "react"
import IReactNode from "../models/IReactNode"
import IStore from "../models/IStore"

export const Context = createContext<IStore | null>(null)

export const StoreProvider = ({ children }: IReactNode) => {
  const store: IStore = {
    projectsStore: {
      projects: useRef([])
    },
    repositoriesStore: {
      repos: useRef([]),
      repo: useRef(""),
      date: useRef(""),
      link: useRef(""),
      message: useRef(""),
      sha: useRef("")
    }
  }

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider >
  )
}
