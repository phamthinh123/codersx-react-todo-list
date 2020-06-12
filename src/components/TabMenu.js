import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import homeOutline from '@iconify/icons-ion/home-outline';
import giftIcon from '@iconify/icons-bytesize/gift';


import settingOutlined from '@iconify/icons-ant-design/setting-outlined';

import cafeIcon from '@iconify/icons-carbon/cafe';
// npm install --save-dev @iconify/react @iconify/icons-cil

import cloudUpload from '@iconify/icons-cil/cloud-upload';

class TabMenu extends Component{
  render(){

    return(
    <div className="TabMenu">
      <div><Icon icon={this.props.item.icon}  width="65" height="65"/>{this.props.item.label}</div>

      </div>
    )
  }
}
export default TabMenu


