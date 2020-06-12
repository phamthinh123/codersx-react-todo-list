import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from "./components/TabMenu"

class App extends Component {
  constructor(){
  super();
  this.items=[
  { icon: 'homeOutline', label: 'HOME' },
  { icon: 'giftIcon', label: 'DEALS' },
  { icon: 'cloudUpload', label: 'UPLOAD' },
  { icon: 'cafeIcon', label: 'WORK' },
  { icon: 'settingOutlined', label: 'SETTINGS' }
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
