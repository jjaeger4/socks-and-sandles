
import {observer} from 'mobx-react';
import React from 'react';
import appStore from '../appstore';
import { Button } from 'reactstrap';
import autobind from 'autobind-decorator';

const { ipcRenderer } = window.require('electron');

@observer
export default class PowerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  @autobind
  turnOn() {
    let x = ipcRenderer.send('lighton',appStore.devices[0].address);
  }

  render() {
    return (
      <Button 
        color="success"
        onClick={this.turnOn}
      >Power</Button>
    );
  }
}