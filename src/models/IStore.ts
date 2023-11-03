import IProject from "./IProject";
import IRepository from "./IRepository";

export default interface IStore {
  projectsStore: {
    projects: [IProject[], React.Dispatch<React.SetStateAction<IProject[]>>]
  },
  repositoriesStore: {
    repos: [IRepository[], React.Dispatch<React.SetStateAction<IRepository[]>>],
    date: [string, React.Dispatch<React.SetStateAction<string>>],
    message: [string, React.Dispatch<React.SetStateAction<string>>],
    repo: [string, React.Dispatch<React.SetStateAction<string>>],
    sha: [string, React.Dispatch<React.SetStateAction<string>>],
    link: [string, React.Dispatch<React.SetStateAction<string>>]
  }
}
