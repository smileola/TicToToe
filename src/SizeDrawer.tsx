import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import TicToToActions from './data/TicToToActions';

const drawerStyle = {

};
const menuItemStyle ={
  textAlign: 'justify'
};
export default class SizeDrawer extends React.Component<any,any> {
  handleMenuClick(size){
    TicToToActions.updateBoardSize(size);
    this.props.jumpTo();
  }
  render() {
    let togglestate = this.props.toggle.toggled;
    //console.log(this.props.toggle);
    return (
      <div>
        <Drawer style={drawerStyle} openSecondary={true} open={togglestate} width={"10%"}>
          <AppBar showMenuIconButton={false} title="Grid size" />
          <MenuItem id='3' style={menuItemStyle} onClick={()=>this.handleMenuClick(3)}>3 X 3</MenuItem>
          <MenuItem id='4' style={menuItemStyle} onClick={()=>this.handleMenuClick(4)}>4 X 4</MenuItem>
          <MenuItem id='5' style={menuItemStyle} onClick={()=>this.handleMenuClick(5)}>5 X 5</MenuItem>
          <MenuItem id='6' style={menuItemStyle} onClick={()=>this.handleMenuClick(6)}>6 X 6</MenuItem>
        </Drawer>
      </div>
    );
  }
}
