import IStore from "../../models/IStore"

export default interface IGitHubService {
  getRepos: (context: IStore | null) => Promise<void>
  getUpdatedRepo: (context: IStore | null) => void
  getLastCommit: (context: IStore | null) => Promise<void>
}
