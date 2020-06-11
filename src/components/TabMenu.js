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
      <div className="home"><Icon icon={homeOutline}  width="65" height="65" />HOME</div>
      <div className="home"><Icon icon={giftIcon}  width="65" height="65" />DEALS</div>
      <div className="home"><Icon icon={cloudUpload}  width="65" height="65" />UPLOAD</div>
      <div className="home"><Icon icon={cafeIcon}  width="65" height="65" />WORK</div>
      <div className="home"><Icon icon={settingOutlined}  width="65" height="65" />SETTINGS</div>
      </div>
    )
  }
}
export default TabMenu


