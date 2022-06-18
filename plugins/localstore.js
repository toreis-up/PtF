import Storage from "vue-ls";

const options = {
  namesapce: "Vuex",
  name: "ls",
  storage: "local",
};

const { ls } = Storage.useStorage(options);

export default ls;
