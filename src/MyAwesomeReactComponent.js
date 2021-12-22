import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import * as Mui from 'material-ui';
import * as Col from 'material-ui/styles/colors'

const style = {margin: 5};

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

const AppBarExampleIcon = () => (
  <AppBar
    title="Toto"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={
       <Mui.Avatar
         color={Col.white}
         backgroundColor={Col.lightBlack}
         size={40}
         style={style}
       >
         AO
       </Mui.Avatar>
     }
  />
);

export  {AppBarExampleIcon, MyAwesomeReactComponent};
