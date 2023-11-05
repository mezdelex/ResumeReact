import IGitHubService from "./IGitHubService"

const commitsUrl: string = `https://api.github.com/repos/mezdelex/replaceMe/commits`
const reposUrl: string = "https://api.github.com/users/mezdelex/repos"

export const gitHubService: IGitHubService = {
  getRepos: (context) => {
    fetch(reposUrl)
      .then(response => response.json())
      .then(data => (context?.repositoriesStore.repos[1](data)))
      .catch(error => console.log(error))
  },
  getUpdatedRepo: (context) => {
    if (context?.repositoriesStore.repos[0].length)
      context.repositoriesStore.repo[1](context.repositoriesStore.repos[0]
        .reduce((current, next) => new Date(current.pushed_at) > new Date(next.pushed_at)
          ? current
          : next, context.repositoriesStore.repos[0][0]).name)
  },
  getLastCommit: (context) => {
    if (context?.repositoriesStore.repos[0].length)
      fetch(commitsUrl.replace("replaceMe", context.repositoriesStore.repo[0]))
        .then(response => response.json())
        .then(data => {
          context.repositoriesStore.date[1](data[0].commit.author.date.substring(0, 10))
          context.repositoriesStore.message[1](data[0].commit.message)
          context.repositoriesStore.sha[1](data[0].sha)
          context.repositoriesStore.link[1](`https://github.com/mezdelex/${context.repositoriesStore.repo[0]}/commit/${context.repositoriesStore.sha[0]}`)
        }).catch((error) => console.log(error))
  }
}
