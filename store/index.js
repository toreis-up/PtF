import Vue from "vue";

export const state = () => ({
  authUser: null,
});

export const getters = {
  getUser(state) {
    return state.authUser;
  },
  isLoggedin(state) {
    return !!state.authUser;
  },
};

export const mutations = {
  resetUser(state) {
    state.authUser = null;
  },
  setUser(state, data) {
    console.log(data);
    let submitUser = {
      displayName: data.user.displayName,
      UID: data.user.uid,
    };
    state.authUser = submitUser;
  },
};

export const actions = {
  async onauthStateChaged({ commit }, { authUser }) {
    if (!authUser) {
      await this.$router.push("/login");
      commit("resetUser");
      return;
    }

    if (authUser) {
      try {
        await this.$router.push("/index");
      } catch (e) {
        console.error(e);
      }
    }

    commit("setUser", authUser);
  },
  nuxtClientInit({ commit, state, dispatch }, { req }) {
    if (
      !!localStorage.getItem("authDisplayName") &&
      !!localStorage.getItem("authUID")
    ) {
      this.$store.commit("setUser", {
        user: {
          displayName: localStorage.getItem("authDisplayName"),
          uid: localStorage.getItem("authUID"),
        },
      });
    }
  },
};
