import * as React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationAction } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const oIcon = "O";
const xIcon = "X";

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends React.Component<any,any> {
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selected}>
          <BottomNavigationAction
            label={this.props.labels[0]}
            icon={oIcon}
          />
          <BottomNavigationAction
            label={this.props.labels[1]}
            icon={xIcon}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
