import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from "./components/TabMenu"
import homeOutline from './img/500_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg';
import giftIcon from './img/500_F_118730742_uNTl3r0A5uKvfPdjvSEDroehYYz8P5G9.jpg';


import settingOutlined from './img/500_F_177304889_R7cxBSbOlwYk05BRuwj8VZxpLClKSzlk.jpg';

import cafeIcon from './img/500_F_171267967_OZsnAMcnGyUYs9HbguT2kBbSkJOEIdfX.jpg';
// npm install --save-dev @iconify/react @iconify/icons-cil

import cloudUpload from './img/500_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg';
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
