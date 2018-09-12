import {observer} from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import styles from './styles/styles.scss';

import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'reactstrap';
import Test from './components/test';
import PowerButton from './components/powerbutton';
import Discover from './components/discover';
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
        <Discover />
        <PowerButton />
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));