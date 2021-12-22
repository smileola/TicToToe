import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {darkWhite,grey500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import TicToToActions from './data/TicToToActions';

const style = {
  backgroundColor:darkWhite,
};

export default class GlobalAppBar extends React.Component <any,any>{
  handleClick() {
    TicToToActions.toggleAppbar('togglestateLeft');
  }
  render(){
    return(
      <AppBar title="Je suis une AppBar"
        style={style} titleStyle={{color:grey500}}
        iconElementLeft={
          <IconButton onClick={this.handleClick}>
            <MenuIcon color={grey500}/>
          </IconButton>
        }
      />);
  }
}
