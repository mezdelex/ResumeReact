import IGitHubService from "./IGitHubService"

const commitsUrl: string = `https://api.github.com/repos/mezdelex/replaceMe/commits`
const reposUrl: string = "https://api.github.com/users/mezdelex/repos"

export const gitHubService: IGitHubService = {
  getRepos: async (context) => {
    await fetch(reposUrl)
      .then(response => response.json())
      .then(data => (context!.repositoriesStore.repos.current = data))
      .catch(error => console.log(error))
  },
  getUpdatedRepo: (context) => {
    if (context!.repositoriesStore.repos.current.length)
      context!.repositoriesStore.repo.current = context!.repositoriesStore.repos.current
        .reduce((current, next) => new Date(current.pushed_at) > new Date(next.pushed_at)
          ? current
          : next, context!.repositoriesStore.repos.current[0]).name
  },
  getLastCommit: async (context) => {
    if (context!.repositoriesStore.repos.current.length)
      await fetch(commitsUrl.replace("replaceMe", context!.repositoriesStore.repo.current))
        .then(response => response.json())
        .then(data => {
          context!.repositoriesStore.date.current = data[0].commit.author.date.substring(0, 10)
          context!.repositoriesStore.message.current = data[0].commit.message
          context!.repositoriesStore.sha.current = data[0].sha
          context!.repositoriesStore.link.current = `https://github.com/mezdelex/${context!.repositoriesStore.repo.current}/commit/${context!.repositoriesStore.sha.current}`
        }).catch((error) => console.log(error))
  }
}
