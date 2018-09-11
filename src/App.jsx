import {observer} from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import styles from './styles/styles.scss';

import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';
import Test from './components/test';
import appStore from './appstore';
import autobind from 'autobind-decorator';

@observer
class App extends React.Component {
  @autobind
  doStuff() {
    appStore.test = "asdf";
  }

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={this.doStuff}
          size="sm"
        >Danger!</Button>
        <div className='black'>React + Bootstrap + MobX + WebPack Start Pack</div>
        <Test />
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));