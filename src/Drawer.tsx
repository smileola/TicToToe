import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import TicToToActions from './data/TicToToActions';
import Divider from 'material-ui/Divider';
const menuItemStyle ={
  textAlign: 'justify'
};
export default class AppDrawer extends React.Component <any,any>{
  /*constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }*/
  updateTheme(theme:string){
    console.log('clicking menuitem '+ theme);
    TicToToActions.updateTheme(theme);
    this.closeDrawer();
  }

  updateView(view:string){
    TicToToActions.updateView(view);
    this.closeDrawer();
  }
  closeDrawer(){
    TicToToActions.toggleAppbar('togglestateLeft');
  }

updateToLight(){
  this.updateTheme('light');
}

  render() {
    let togglestate = this.props.toggle.toggled;
    return (
        <Drawer
          docked={false}
          open={togglestate}
          width={200}
          onRequestChange={this.closeDrawer}
        >
          <MenuItem style={menuItemStyle} onClick={()=>this.updateTheme('light')}>Light</MenuItem>
          <MenuItem style={menuItemStyle} onClick={()=>this.updateTheme('dark')}>Dark</MenuItem>
          <Divider/>
          <MenuItem style={menuItemStyle} onClick={()=>this.updateView('game')}>Game</MenuItem>
          <MenuItem style={menuItemStyle} onClick={()=>this.updateView('documentation')}>Documentation</MenuItem>
        </Drawer>
    );
  }
}
