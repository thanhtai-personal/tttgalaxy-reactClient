const createAuthApi = (makeRequestLib) => {
  return {
    signup: (data) => {
      makeRequestLib.post('signup', data) 
    },
    login: (data) => {
       makeRequestLib.post('login', data) 
    }
  }
}

export default createAuthApi