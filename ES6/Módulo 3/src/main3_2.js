import axios from 'axios'
class Api {
  static async getUserFromGithub(username) {
      try {
          const response = await axios.get(`https://api.github.com/users/${username}`);
          console.log(response)
      } catch (err) {
          console.warn('Usuario não existe.')
      }

  }
}

Api.getUserFromGithub('dhavizinhdo')
Api.getUserFromGithub('DAWestphal')