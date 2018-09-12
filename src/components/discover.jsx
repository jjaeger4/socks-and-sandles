
import {observer} from 'mobx-react';
import React from 'react';
import appStore from '../appstore';
import { Button } from 'reactstrap';
import autobind from 'autobind-decorator';

const { ipcRenderer } = window.require('electron');

// import { MagicHomeDiscovery } from 'magic-home';

@observer
export default class Disover extends React.Component {
  constructor(props) {
    super(props);
  }

  @autobind
  searchLights() {
    let x = ipcRenderer.send('discover');
    ipcRenderer.on('logDiscovery', (event, result) => {
      appStore.devices = result;
    });
  }

  render() {
    return (
      <Button 
        color="default"
        onClick={this.searchLights}
      >Discover</Button>
    );
  }
}