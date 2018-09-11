import {observable, action} from 'mobx';

class AppStore {
  @observable test = "test123";
}

const singleton = new AppStore();

export default singleton;