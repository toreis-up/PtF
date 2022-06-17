export const state = () => ({
  authUser: null
}) 

export const getters = {
  getUser(state) {
    return state.authUser
  },
  isLoggedin(state) {
    return !!state.authUser
  }
}

export const mutations = {
  resetUser (state) {
    this.$ls.set('authUser', null);
    state.authUser = null
  },
  setUser (state, data) {
    let submitUser = {
      displayName: data.user.displayName,
      UID: data.user.uid
    }
    state.authUser = submitUser;
    this.$ls.set('authUser', submitUser)
  }
}

export const actions = {
  async onauthStateChaged({commit},{authUser}) {
    if (!authUser){
      await this.$router.push("/login")
      commit ('resetUser')
      return
    }

    if (authUser) {
      try{
        await this.$router.push("/index")
      }catch (e) {
        console.error(e)
      }
    }

    commit ('setUser', authUser)
  }
}
