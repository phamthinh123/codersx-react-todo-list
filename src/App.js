import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from "./components/TabMenu"

import homeOutline from '@iconify/icons-ion/home-outline';
import giftIcon from '@iconify/icons-bytesize/gift';


import settingOutlined from '@iconify/icons-ant-design/setting-outlined';

import cafeIcon from '@iconify/icons-carbon/cafe';
// npm install --save-dev @iconify/react @iconify/icons-cil

import cloudUpload from '@iconify/icons-cil/cloud-upload';
class App extends Component {
  constructor(){
  super();
   this.items=[
  { icon: homeOutline, label: 'HOME' },
  { icon: giftIcon, label: 'DEALS' },
  { icon: cloudUpload, label: 'UPLOAD' },
  { icon: cafeIcon, label: 'WORK' },
  { icon: settingOutlined, label: 'SETTINGS' }
];
}
  render() {
   
    return (
      <div className="App">
            
            {
              this.items.map((item) =>
                <TabMenu item={item} />
                )
            }
      </div>
    );
  }
}

export default App;
