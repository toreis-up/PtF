import Storage from 'vue-ls';

const options = {
  namesapce: 'Vuex',
  name: 'is',
  storage: 'local',
};

const { ls } = Storage.useStorage(options)

export default ls