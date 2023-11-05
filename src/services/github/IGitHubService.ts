import IStore from "../../models/IStore"

export default interface IGitHubService {
  getRepos: (context: IStore | null) => void
  getUpdatedRepo: (context: IStore | null) => void
  getLastCommit: (context: IStore | null) => void
}
