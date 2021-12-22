import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Hidden from 'material-ui-beta/Hidden';
import IconButton from 'material-ui/IconButton'
import Home from 'material-ui/svg-icons/action/home';
import Favorite from 'material-ui/svg-icons/action/favorite';
import {grey500} from 'material-ui/styles/colors';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

let styleButton = {
  position:'absolute',
  right:36,
};
let styleButton2 = {
  position:'absolute',
  right:76,
};

export default class TicCard extends React.Component <any,any>{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          actAsExpander={true}
          avatar=""
          showExpandableButton={true}
        >
          <Hidden smDown>
            <IconButton style={styleButton}>
              <Home color={grey500}/>
            </IconButton >
            <IconButton style={styleButton2}>
              <Favorite color={grey500}/>
            </IconButton >
          </Hidden>
          <Hidden smUp>
            <IconMenu
            iconButtonElement={<IconButton><MenuIcon color={grey500}/></IconButton>}
            style={styleButton}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
              <MenuItem primaryText="Home"/>
              <MenuItem primaryText="Favorite"/>
            </IconMenu>

          </Hidden>
        </CardHeader>
        <CardText>
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    );
  }
}
