import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';


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