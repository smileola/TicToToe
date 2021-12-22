import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from "material-ui/Toolbar";
import Typography from 'material-ui/Typography';
import Menu,{MenuItem} from 'material-ui/Menu';
import Button from 'material-ui/Button';
import MenuIcon from "material-ui-icons/Menu";
import NavigationSettings from "material-ui-icons/Settings";
import { withStyles } from 'material-ui/styles';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import TicToToActions from './data/TicToToActions';


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppBarIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };

  }
handleClickMenu = event => {
  this.setState({anchorEl:event.currentTarget});
};
handleClose = event => {
  this.setState({anchorEl:null});
};

handleClick() {
  TicToToActions.toggleAppbar('togglestateRight');
}
handleMenuItemClick(move){
  this.props.onMenuItemClick(move);
  this.handleClose();
}
getMovesMap(){
  const moves = this.props.movelist.map((step,move)=>{
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    /*return (
      <MenuItem key={move} onClick={()=>this.jumpTo(move)}/>
    );*/
    return (
      <MenuItem key={move} onClick={()=>this.handleMenuItemClick(move)}>{desc}</MenuItem>
    );
  });
  return moves;
}
render(){
  console.log(this.props.movelist);
  const { anchorEl } = this.state;
  const { classes } = this.props;
  return(
    <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton className={classes.menuButton} color="inherit" arial-label="Menu"
                        onClick={this.handleClickMenu}>
              <MenuIcon/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {this.getMovesMap()}
            </Menu>
          </div>
          <Typography type="title" color="inherit" className={classes.flex}>
            TicToTo
          </Typography>

          <IconButton color="inherit" arial-label="Menu"
                      onClick={this.handleClick}>
            <NavigationSettings/>
          </IconButton>

        </Toolbar>
      </AppBar>

    );
  }
}

export default withStyles(styles)(AppBarIcon);
