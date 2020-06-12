import React, { Component } from 'react';




class TabMenu extends Component{

  render(){

    return(
    <div className="TabMenu">
      <div><img src={this.props.item.icon}  width="65" height="65"/>{this.props.item.label}</div>
  
      </div>
    )
  }
}
export default TabMenu


